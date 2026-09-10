// Service Worker cho PWA "Tiếng Anh Lớp 1 - Cô giáo Thỏ Hồng"
// ---------------------------------------------------------------------------------------------
// CHIẾN LƯỢC: NETWORK-FIRST TRIỆT ĐỂ (luôn ưu tiên tải BẢN MỚI NHẤT từ mạng).
// Phù hợp giai đoạn phần mềm đang phát triển, cập nhật thường xuyên:
//   - Mỗi lần mở app, TẤT CẢ file (index.html, app.js, icon...) đều được tải mới từ server nếu có mạng
//     -> anh KHÔNG cần đổi số phiên bản thủ công mỗi lần sửa code nữa.
//   - Cache chỉ đóng vai trò DỰ PHÒNG: chỉ dùng khi mất mạng, để app vẫn mở được offline.
//   - Dữ liệu động (assets/data/*.json) và Google Apps Script luôn đi thẳng ra mạng, không cache.
// ---------------------------------------------------------------------------------------------

const CACHE_NAME = 'tienganh1-runtime';

// Vỏ tối thiểu để app còn mở được khi offline (nạp sẵn lúc cài cho chắc).
const APP_SHELL = [
  './',
  './index.html',
  './assets/js/app.js',
  './manifest.json'
];

// Khi cài: nạp sẵn vỏ ứng dụng bằng bản mới nhất, rồi kích hoạt ngay không chờ.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL.map((u) => new Request(u, { cache: 'reload' }))))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

// Khi kích hoạt: xoá mọi cache cũ khác tên và giành quyền điều khiển tất cả tab đang mở ngay lập tức.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cho phép trang chủ động yêu cầu SW mới kích hoạt ngay (dùng kèm đoạn script trong index.html).
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // POST (Apps Script...) để trình duyệt tự xử lý.

  const url = new URL(req.url);

  // Luôn đi thẳng ra mạng, KHÔNG can thiệp: dữ liệu động + mọi domain ngoài (CDN, giọng đọc TTS...).
  const isDynamicData = url.pathname.includes('/assets/data/');
  const isCrossOrigin = url.origin !== self.location.origin;
  if (isDynamicData || isCrossOrigin) return;

  // NETWORK-FIRST: luôn xin bản mới nhất từ server (cache:'no-store' để bỏ qua cả HTTP cache của trình
  // duyệt). Tải được -> cập nhật lại cache dự phòng rồi trả về. Mất mạng -> mới lấy bản đã lưu trong cache.
  event.respondWith(
    fetch(new Request(req.url, { cache: 'no-store' }))
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => cached || caches.match('./index.html'))
      )
  );
});
