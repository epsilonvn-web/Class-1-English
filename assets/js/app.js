// ==========================================
// CẤU HÌNH 12 CHỦ ĐỀ KHO HỌC LIỆU & MA TRẬN 6 NHÓM NĂNG LỰC ENG_PHO-READ (TIẾNG ANH LỚP 1)
// ==========================================
// Trang chủ "Học tự do" tổ chức theo đúng 12 CHUYÊN MỤC hoạt động (Mục I khung V6) —
// KHÁC với 12 Chủ Đề nội dung (Mục III, dùng riêng cho Lộ trình 24 tuần bên dưới).
// Chuyên mục 1 (Alphabet & IPA phần A-Z + 44 IPA tĩnh) và 12 (Exam Arena) có màn hình riêng,
// nên TOPICS_CONFIG chỉ liệt kê 2-11 + mục 1 dành riêng cho Phonics Matcher (1.3, dạng trắc nghiệm).
const TOPICS_CONFIG = [
    { id: 2, title: "2. Vocabulary", desc: "Flashcards, Nghe tranh, Kéo thả chữ", icon: "📚", color: "pink" },
    { id: 3, title: "3. Remove Letter", desc: "Chạm xoá chữ cái thừa", icon: "✂️", color: "rose" },
    { id: 4, title: "4. Fill Missing", desc: "Điền chữ cái còn thiếu", icon: "✏️", color: "amber" },
    { id: 5, title: "5. Odd One Out", desc: "Tìm từ khác nhóm/khác loại", icon: "🧩", color: "fuchsia" },
    { id: 6, title: "6. Reading Stories", desc: "Đọc truyện ngắn 2 câu hỏi", icon: "📖", color: "emerald" },
    { id: 7, title: "7. Sentence Builder", desc: "Sắp xếp từ thành câu", icon: "🧱", color: "indigo" },
    { id: 8, title: "8. Fill Sentence", desc: "Điền câu hoàn chỉnh theo ngữ cảnh", icon: "📝", color: "teal" },
    { id: 9, title: "9. Q&A Dialogues", desc: "Hội thoại cùng Mascot Thỏ Hồng", icon: "💬", color: "cyan" },
    { id: 10, title: "10. Grammar Point", desc: "Mạo từ, giới từ, động từ, tính từ", icon: "🅰️", color: "blue" },
    { id: 11, title: "11. Practice & Play", desc: "Ôn tập ngắt quãng theo học kỳ", icon: "🎮", color: "purple" }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Lộ trình 24 tuần (V4) — mỗi chủ đề lớn (Mục X) tách 2 tuần Part1 (X.1: Từ vựng/Nghe/Ngữ âm)
// và Part2 (X.2: Ngữ pháp/Cú pháp/Đọc hiểu). Tuần 12 = chốt chặn HK1 (đề ôn 15 câu),
// Tuần 17 = ôn tập giữa kỳ (đề ôn 15 câu), Tuần 24 = Đấu trường chung kết.
const roadmapConfig = {
    1:  { name: "Tuần 1: Greetings & Playground (Part 1)", desc: "Từ vựng chào hỏi & đồ chơi sân trường (hello, book, ball, bike). Cấu trúc: Hi, I'm Bill.", icon: "👋" },
    2:  { name: "Tuần 2: Greetings & Playground (Part 2)", desc: "Từ vựng tạm biệt & sân chơi. Cấu trúc: Bye, Ba. Đọc hiểu truyện sân chơi Level 1.", icon: "👋" },
    3:  { name: "Tuần 3: My Family & Home (Part 1)", desc: "Từ vựng người thân (mother, father, mom, dad, brother, sister). Cấu trúc: This is my mother.", icon: "🏠" },
    4:  { name: "Tuần 4: My Family & Home (Part 2)", desc: "Từ vựng phòng ở (bedroom, kitchen, bathroom...). Cấu trúc: Where is Mom? - She's in the kitchen.", icon: "🏠" },
    5:  { name: "Tuần 5: Review & Play 1", desc: "Ôn tập ngắt quãng toàn bộ từ vựng, ngữ âm, ngữ pháp Tuần 1-4 qua game lật thẻ.", icon: "🔁" },
    6:  { name: "Tuần 6: Shapes & Numbers (Part 1)", desc: "Đếm số 1-5 & hình khối cơ bản (circle, square, triangle).", icon: "🔷" },
    7:  { name: "Tuần 7: Shapes & Numbers (Part 2)", desc: "Đếm số 6-10 & hình ngôi sao. Cấu trúc: How many clocks are there? - Six.", icon: "🔷" },
    8:  { name: "Tuần 8: My Toys & Space (Part 1)", desc: "Từ vựng đồ chơi (teddy bear, top, kite, doll, robot...). Cấu trúc: I have a robot.", icon: "🧸" },
    9:  { name: "Tuần 9: My Toys & Space (Part 2)", desc: "Giới từ chỉ vị trí (in, on, under, next to). Cấu trúc: Where is the ball? - It's on the box.", icon: "🧸" },
    10: { name: "Tuần 10: World of Animals (Part 1)", desc: "Động vật nông trại (cat, dog, duck, bird, rabbit, goat, horse, hen).", icon: "🦁" },
    11: { name: "Tuần 11: World of Animals (Part 2)", desc: "Động vật hoang dã (monkey, tiger, elephant, hippo, mouse, fish).", icon: "🦁" },
    12: { name: "Tuần 12: Semester 1 Grand Review", isGrandReview: true, desc: "Chốt chặn Học kỳ I — đề ôn tổng hợp 15 câu, đạt ≥80% để mở khoá Học kỳ II.", icon: "🏅" },
    13: { name: "Tuần 13: Clothes & Outfits (Part 1)", desc: "Từ vựng trang phục (hat, bag, shoes, t-shirt, dress, socks, umbrella).", icon: "👗" },
    14: { name: "Tuần 14: Clothes & Outfits (Part 2)", desc: "Màu sắc cơ bản. Cấu trúc: I have a red hat. He's wearing a blue t-shirt.", icon: "👗" },
    15: { name: "Tuần 15: Yummy Food & Drinks (Part 1)", desc: "Món ăn quen thuộc (cake, fish, chips, milk, chicken, banana, juice). Cấu trúc: I like fish.", icon: "🍕" },
    16: { name: "Tuần 16: Yummy Food & Drinks (Part 2)", desc: "Từ vựng món ăn mở rộng. Cấu trúc: Do you want some milk? - Yes, please.", icon: "🍕" },
    17: { name: "Tuần 17: Review & Play 2", isReview15: true, desc: "Ôn tập tổng hợp 15 câu Tuần 13-16: Clothes & Food.", icon: "🔁" },
    18: { name: "Tuần 18: Go Places & Vehicles (Part 1)", desc: "Phương tiện di chuyển (bus, car, truck, plane, bike). Cấu trúc: Can you see the plane?", icon: "🚌" },
    19: { name: "Tuần 19: Go Places & Vehicles (Part 2)", desc: "Địa điểm & thiên nhiên xung quanh. Cấu trúc: I can see a bus. She is running in the sun.", icon: "🚌" },
    20: { name: "Tuần 20: Creative Classroom (Part 1 - Tools)", desc: "Đồ dùng học tập (pen, pencil, ruler, eraser, crayon, book, school bag).", icon: "🎒" },
    21: { name: "Tuần 21: Creative Classroom (Part 2 - Commands)", desc: "Mệnh lệnh lớp học (Open your book, Close the door, Stand up, Sit down).", icon: "📐" },
    22: { name: "Tuần 22: Beautiful Nature & Home (Part 1)", desc: "Thiên nhiên (lake, leaf, lemon, sky, sun, water, garden, gate).", icon: "🌈" },
    23: { name: "Tuần 23: Beautiful Nature & Home (Part 2)", desc: "Chăm sóc bản thân (wash, water, clean, soap, hands, face).", icon: "🌈" },
    24: { name: "Tuần 24: Grand Exam Arena", isExam: true, desc: "Đề thi chuẩn 13 câu ma trận tích hợp, hiển thị biểu đồ năng lực cuối khoá.", icon: "🏆" }
};

const TOTAL_ROADMAP_WEEKS = 24;

// Toạ độ 35 mốc tuần dạng zigzag rắn bò (serpentine), 7 cột x 5 hàng, tự tính không cần khai báo tay từng điểm
function getRoadmapCoord(weekNum) {
    const cols = 6;
    const colWidth = 110, rowHeight = 89;
    const startX = 44, startY = 42;
    const idx = weekNum - 1;
    const row = Math.floor(idx / cols);
    const posInRow = idx % cols;
    const col = (row % 2 === 0) ? posInRow : (cols - 1 - posInRow);
    return { x: startX + col * colWidth, y: startY + row * rowHeight };
}

function buildRoadmapPathD(totalWeeks) {
    const pts = [];
    for (let w = 1; w <= totalWeeks; w++) pts.push(getRoadmapCoord(w));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        const dx = p1.x - p0.x, dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        // Sóng uốn lượn xuống-lên LIÊN TỤC xuyên suốt toàn bộ đường đi (kể cả đoạn chuyển hàng),
        // không để đoạn nào thẳng đơ xen giữa — giống hệt kiểu bản đồ lộ trình game (Duolingo-style).
        const bend = (i % 2 === 0 ? 1 : -1) * 26;
        const cx = midX + nx * bend, cy = midY + ny * bend;
        d += ` Q ${cx},${cy} ${p1.x},${p1.y}`;
    }
    return d;
}

const examFileMap = {
    hocky1: { file: 'de_thi_tieng_anh_1.json', arrayKey: 'semester_1_exams', sheet: 'LichSuBaiThiHK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_tieng_anh_1.json', arrayKey: 'semester_2_exams', sheet: 'LichSuBaiThiHK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_tieng_anh_1.json', arrayKey: 'hsg_exams', sheet: 'LichSuBaiThiHSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực ngôn ngữ Tiếng Anh lớp 1 (ENG_PHO, ENG_VOC, ENG_LIS, ENG_GRA, ENG_SYN, ENG_READ).
const SKILL_TAXONOMY = {
    ENG_PHO: { code: 'ENG_PHO', sheetCol: 'ENG_PHO_DungSo', totalCol: 'ENG_PHO_TongSo', name: 'Ngữ âm & Chính tả', advice: 'Con cần luyện thêm cách đánh vần, nhận diện chữ cái và âm đầu/âm cuối của từ vựng.' },
    ENG_VOC: { code: 'ENG_VOC', sheetCol: 'ENG_VOC_DungSo', totalCol: 'ENG_VOC_TongSo', name: 'Từ vựng & Ý nghĩa', advice: 'Con nên ôn lại vốn từ vựng theo từng chủ đề, ghi nhớ nghĩa và cách dùng của từ.' },
    ENG_LIS: { code: 'ENG_LIS', sheetCol: 'ENG_LIS_DungSo', totalCol: 'ENG_LIS_TongSo', name: 'Nghe hiểu', advice: 'Con cần luyện nghe nhiều hơn, tập trung nghe kỹ giọng đọc trước khi chọn đáp án.' },
    ENG_GRA: { code: 'ENG_GRA', sheetCol: 'ENG_GRA_DungSo', totalCol: 'ENG_GRA_TongSo', name: 'Ngữ pháp bối cảnh', advice: 'Con nên ôn lại các mẫu câu, mạo từ, giới từ để dùng đúng ngữ pháp hơn.' },
    ENG_SYN: { code: 'ENG_SYN', sheetCol: 'ENG_SYN_DungSo', totalCol: 'ENG_SYN_TongSo', name: 'Cú pháp & Lập câu', advice: 'Con cần luyện thêm cách sắp xếp từ thành câu đúng trật tự tiếng Anh.' },
    ENG_READ: { code: 'ENG_READ', sheetCol: 'ENG_READ_DungSo', totalCol: 'ENG_READ_TongSo', name: 'Đọc hiểu', advice: 'Con nên luyện đọc đoạn văn kỹ hơn, tìm đúng thông tin trước khi trả lời.' }
};
const SKILL_KEYS = Object.keys(SKILL_TAXONOMY);

const GREETINGS_STUDENT = [
    "Chào {name}, cô Thỏ Hồng rất vui được học tiếng Anh cùng con hôm nay!",
    "Chào mừng {name} quay lại! Sẵn sàng chinh phục thêm thật nhiều từ vựng mới chưa nào?",
    "Cô Thỏ Hồng chào {name}! Cùng nhau nói tiếng Anh thật giỏi hôm nay nhé!",
    "Chào con yêu {name}, hôm nay chúng mình cùng khám phá thế giới tiếng Anh nhé!",
    "Chào mừng {name} đến với giờ học tiếng Anh! Cô Thỏ Hồng tin con sẽ học rất giỏi!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Thỏ Hồng rất vui được cùng con luyện tiếng Anh hôm nay!",
    "Chào mừng bé đến với lớp tiếng Anh của cô Thỏ Hồng! Mình cùng thử sức xem sao nhé!",
    "Cô Thỏ Hồng chào bé! Cùng khám phá từ vựng mới thật vui nào!",
    "Chào thiên tài nhí! Cô Thỏ Hồng đang chờ xem con nói tiếng Anh giỏi cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Tiếng Anh! Chúc con học thật vui vẻ!"
];


// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzdiYg6HysPgQ1n_ZUzRDftT5uY3l9mnL53KJe57TKk4EUWQz4ZSkhQKaFtv-HuVuQVWg/exec";
let allTopicsDataCache = null;
let ALPHABET_DATA = [];
let IPA_DATA = [];
let currentAlphaTab = 'alpha';
let allQuestionsFlatCache = null;
// Bản văn bản thuần của phần "Nhận xét sư phạm & kế hoạch bồi dưỡng" — cập nhật mỗi lần
// renderPedagogicalEvaluation() chạy, dùng cho nút "Nghe cô giáo đọc" (dùng chung Tiến trình tuần + Đề thi).
let pedagogicalEvaluationText = '';
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('autoSpeechEnabled') !== 'false';
const examsCache = {};

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        // "sub_topic"/"sub_code" = MÃ Chuyên Mục.Hoạt-động-con THẬT (VD "2.1") — dùng để nhóm
        // câu hỏi cho TRANG CHỦ "Học tự do" theo đúng 12 Chuyên Mục (Mục I khung V6).
        // "week" = MÃ Chủ Đề nội dung.Part (VD "1.1") — dùng RIÊNG để lọc câu hỏi theo
        // Lộ trình 24 tuần (Mục III khung V6). Hai trục KHÔNG được gộp chung với nhau.
        sub_topic: String(q.sub_code ?? q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        sub_topic_label: String(q.sub ?? q.sub_code ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        week: q.week ?? q.w ?? null,
        paired_group: q.pg ?? q.paired_group ?? '',
        content_topic: String(q.topic ?? q.content_topic ?? '').trim(),
        // Phiên âm IPA cho từng đáp án (mảng cùng thứ tự với "options") — JSON mới của anh
        // gắn sẵn dưới tên "o_ipa"/"options_ipa" (2 tên trùng nội dung, chỉ cần đọc 1 trong 2).
        options_ipa: q.o_ipa ?? q.options_ipa ?? q.oipa ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        emoji: q.emo ?? q.emoji ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? q.tag ?? 'ENG_VOC',
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

// Đề ôn tập tổng hợp 15 câu (Tuần 12 chốt chặn HK1 & Tuần 17 ôn giữa kỳ) — đúng ma trận V4:
// 3 ENG_PHO@0.5 + 2 ENG_VOC@0.5 + 2 ENG_LIS@0.5 + 3 ENG_GRA(2x1.0+1x0.5) + 3 ENG_SYN(2x1.0+1x0.5) + 2 ENG_READ@0.75 = 10.0đ
const REVIEW15_SPEC = [
    { tag: 'ENG_PHO', pts: [0.5, 0.5, 0.5] },
    { tag: 'ENG_VOC', pts: [0.5, 0.5] },
    { tag: 'ENG_LIS', pts: [0.5, 0.5] },
    { tag: 'ENG_GRA', pts: [1.0, 1.0, 0.5] },
    { tag: 'ENG_SYN', pts: [1.0, 1.0, 0.5] },
    { tag: 'ENG_READ', pts: [0.75, 0.75] }
];

// Trả về pool 60 câu (đã chuẩn hoá) của đúng 1 tuần, lấy trực tiếp từ weeksByIdCache
// (đã nạp sẵn qua loadSemesterData()) — không còn suy luận qua sub_id/dotted-code nữa,
// vì dữ liệu Tiếng Anh Lớp 1 đã tách sẵn field "weeks" theo đúng weekNum (1-24).
function getWeekRawPool(weekNumber) {
    if (!weeksByIdCache) return [];
    const raw = weeksByIdCache[weekNumber] || [];
    return raw.map(normalizeQuestion).filter(Boolean);
}

function generateReview15(weekNumber) {
    const pool = getWeekRawPool(weekNumber);
    if (!pool.length) return [];

    const bySkill = {};
    SKILL_KEYS.forEach(k => bySkill[k] = shuffleArray(pool.filter(q => q.skill_tag === k)));

    let out = [];
    REVIEW15_SPEC.forEach(spec => {
        const items = bySkill[spec.tag].length ? bySkill[spec.tag] : shuffleArray(pool);
        if (!items.length) return;
        spec.pts.forEach((pts, i) => {
            const src = items[i % items.length];
            out.push({ ...src, diem: pts, id: src.question_id + '_r' + i, question_id: src.question_id + '_r' + i });
        });
    });
    return shuffleArray(out);
}

function getQuestionsForWeek343(weekNumber) {
    // Kho 60 câu/tuần đã dựng sẵn theo đúng tỷ lệ vị trí (Easy đầu / Medium giữa / Hard cuối) —
    // vẫn áp dụng đúng công thức bốc theo VỊ TRÍ 35%-40%-25% rồi rút 9+12+9=30 câu (Mục 5.3),
    // không dựa vào field "difficulty" trực tiếp để không vỡ nếu thứ tự file thay đổi.
    let pool = getWeekRawPool(weekNumber);

    if (pool.length < 30) return shuffleArray([...pool]);

    const size = pool.length;
    const basket1 = pool.slice(0, Math.floor(size * 0.35));
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75));
    const basket3 = pool.slice(Math.floor(size * 0.75));
    
    const easy = shuffleArray([...basket1]).slice(0, 9);
    const medium = shuffleArray([...basket2]).slice(0, 12);
    const hard = shuffleArray([...basket3]).slice(0, 9);
    
    return shuffleArray([...easy, ...medium, ...hard]);
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

// Kho học liệu Tiếng Anh Lớp 1 tách theo 2 học kỳ, mỗi file gồm:
//  - "sections": 12 Chuyên Mục hoạt động (id 1-11 dùng cho trang chủ Học tự do), mỗi section có
//    "subs" (hoạt động con, VD "2.1") chứa sẵn "qs" (mảng câu hỏi đúng schema q/o/a/h/img/sub).
//  - "weeks": pool CÓ SẴN đúng 60 câu/tuần (đã xếp Easy→Medium→Hard theo vị trí) cho Lộ trình 24 tuần,
//    KHÔNG cần suy luận qua sub_id/dotted-code như bản Tiếng Anh Lớp 2 cũ nữa.
const SEMESTER_DATA_FILES = [
    'assets/data/kho_hoc_ky1_tieng_anh_1.json',
    'assets/data/kho_hoc_ky2_tieng_anh_1.json'
];

let semesterDataLoadingPromise = null;
let weeksByIdCache = null; // { 1: [...60 câu thô...], 2: [...], ..., 24: [...] }
let wordMeaningMapCache = {}; // word chuẩn hoá -> mảng tất cả nghĩa tiếng Việt tìm thấy trong Vocabulary
let miniGameVocabCache = null; // nguồn từ vựng Mini Game, lấy đúng từ Chuyên mục 2.1 của TA1

// Chuẩn hoá từ tiếng Anh để tra nghĩa: bỏ Emoji nhưng giữ nguyên chữ, số, dấu gạch nối/apostrophe.
function normalizeVocabWordKey(text) {
    return String(text || '')
        .replace(/[\u{0030}-\u{0039}]?[\u{FE0F}]?[\u{20E3}]/gu, '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{FE0F}]/gu, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

// Rút nghĩa tiếng Việt trực tiếp từ câu hỏi Vocabulary trong JSON.
// VD: "Từ nào có nghĩa là 'bà'?" hoặc "... mô tả 'cái cốc' ...".
function extractVocabularyVietnameseMeaning(questionText) {
    const text = String(questionText || '');
    const patterns = [
        /(?:có\s+)?nghĩa(?:\s+là)?\s*['“\"]([^'”\"]+)['”\"]/i,
        /mô\s+tả\s*['“\"]([^'”\"]+)['”\"]/i,
        /cho\s*['“\"]([^'”\"]+)['”\"]/i
    ];
    for (const re of patterns) {
        const m = text.match(re);
        if (m && m[1]) return m[1].trim();
    }
    return '';
}

function addVocabularyMeaning(wordText, meaningText) {
    const key = normalizeVocabWordKey(wordText);
    const meaning = String(meaningText || '').trim();
    if (!key || !meaning) return;
    if (!wordMeaningMapCache[key]) wordMeaningMapCache[key] = [];
    if (!wordMeaningMapCache[key].includes(meaning)) wordMeaningMapCache[key].push(meaning);
}

function extractMiniGameEmoji(text) {
    const m = String(text || '').match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u);
    return m ? m[0] : '✨';
}

const MINI_GAME_VOCAB_TOPIC_ORDER = [
    'Me, My Family & Home',
    'My School & Playtime',
    'The Animal Kingdom',
    'Numbers, Shapes & Colors',
    'Yummy Food & Garden',
    'Cool Vehicles, Action & Nature'
];

function buildMiniGameVocabItem(q, index) {
    const answerRaw = q.a ?? q.answer ?? '';
    const word = normalizeVocabWordKey(answerRaw);
    const vietnamese = extractVocabularyVietnameseMeaning(q.q || q.question_text || '');
    if (!word || !vietnamese) return null;
    const topicName = String(q.topic ?? q.content_topic ?? 'Từ vựng lớp 1').trim() || 'Từ vựng lớp 1';
    const topicIndex = MINI_GAME_VOCAB_TOPIC_ORDER.indexOf(topicName);
    return {
        id: q.id ?? q.question_id ?? index,
        word,
        vietnamese,
        emoji: extractMiniGameEmoji(answerRaw),
        image_url: q.img ?? q.image_url ?? '',
        sentence: '',
        hint: q.h ?? q.hint ?? '',
        topic_id: topicIndex >= 0 ? topicIndex + 1 : 99,
        topic_name: topicName
    };
}

async function loadSemesterData() {
    if (semesterDataLoadingPromise) return semesterDataLoadingPromise;

    semesterDataLoadingPromise = (async () => {
        const results = await Promise.all(SEMESTER_DATA_FILES.map(async (file) => {
            const res = await fetch(file);
            if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
            return res.json();
        }));

        const sectionsById = {};
        weeksByIdCache = weeksByIdCache || {};
        miniGameVocabCache = miniGameVocabCache || [];

        results.forEach(data => {
            (data.sections || []).forEach(sec => {
                if (!sectionsById[sec.id]) {
                    sectionsById[sec.id] = { id: sec.id, name: sec.name, desc: sec.desc || '', rawQuestions: [] };
                }
                (sec.subs || []).forEach(sub => {
                    (sub.qs || []).forEach((q, qIndex) => {
                        // Mini Game Vocabulary: lấy đúng Chuyên mục 2.1 của TA1 làm nguồn từ vựng chung.
                        if (Number(sec.id) === 2 && String(sub.id || q.sub || '') === '2.1') {
                            const item = buildMiniGameVocabItem(q, qIndex);
                            if (item && !miniGameVocabCache.some(x => x.word === item.word && x.vietnamese === item.vietnamese)) {
                                miniGameVocabCache.push(item);
                            }
                        }

                        // Vocabulary: gom cặp từ tiếng Anh -> nghĩa tiếng Việt từ dữ liệu thật.
                        // Cùng một từ nếu xuất hiện với 2+ nghĩa khác nhau thì giữ TẤT CẢ, không ghi đè.
                        if (Number(sec.id) === 2) {
                            const viMeaning = extractVocabularyVietnameseMeaning(q.q || q.question_text || '');
                            addVocabularyMeaning(q.a ?? q.answer ?? '', viMeaning);
                        }

                        // sub_code = mã hoạt động con thật ("1.3") dùng để LỌC (VD Phonics Matcher = mục 1);
                        // sub = tên hiển thị thân thiện ("Phonics Matcher (Nối âm)") dùng để HIỂN THỊ tiêu đề câu hỏi.
                        sectionsById[sec.id].rawQuestions.push({ ...q, sub_code: q.sub || sub.id, sub: sub.name || q.sub || sub.id });
                    });
                });
            });
            (data.weeks || []).forEach(w => {
                weeksByIdCache[w.week_id] = w.questions || [];
            });
        });

        return { sectionsById };
    })();

    return semesterDataLoadingPromise;
}

async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;
    const { sectionsById } = await loadSemesterData();
    const rawQuestions = Object.values(sectionsById).flatMap(sec => sec.rawQuestions);
    allQuestionsFlatCache = rawQuestions.map(normalizeQuestion).filter(Boolean);
    return allQuestionsFlatCache;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;
    const { sectionsById } = await loadSemesterData();

    allTopicsDataCache = TOPICS_CONFIG.map(t => {
        const sec = sectionsById[t.id];
        const questions = sec ? sec.rawQuestions.map(normalizeQuestion).filter(Boolean) : [];
        return {
            topic_id: t.id,
            topic_name: t.title,
            description: sec?.desc || t.desc,
            lecture_title: '',
            lecture_content: '',
            lecture_audio_text: '',
            questions
        };
    });
    return allTopicsDataCache;
}

function getMiniGameVocabPool(options = {}) {
    const { topicId = null, singleWordOnly = false, maxLength = null, minLength = null } = options;
    let pool = Array.isArray(miniGameVocabCache) ? miniGameVocabCache : [];
    if (topicId !== null && topicId !== undefined && topicId !== 'all') {
        pool = pool.filter(item => Number(item.topic_id) === Number(topicId));
    }
    if (singleWordOnly) pool = pool.filter(item => /^[A-Za-z]+$/.test(item.word));
    if (Number.isFinite(minLength)) pool = pool.filter(item => item.word.replace(/[^A-Za-z]/g, '').length >= minLength);
    if (Number.isFinite(maxLength)) pool = pool.filter(item => item.word.replace(/[^A-Za-z]/g, '').length <= maxLength);
    return pool.map(item => ({ ...item }));
}

function getMiniGameTopicGroups() {
    const map = new Map();
    (miniGameVocabCache || []).forEach(item => {
        const id = Number(item.topic_id || 0);
        if (!id || map.has(id)) return;
        map.set(id, { id, name: item.topic_name || `Nhóm ${id}` });
    });
    return [...map.values()].sort((a, b) => a.id - b.id);
}

async function ensureMiniGameVocabReady() {
    await fetchAllQuestionsFlat();
    if (!miniGameVocabCache || !miniGameVocabCache.length) {
        throw new Error('Không tìm thấy dữ liệu từ Chuyên mục 2.1 - Flashcards Library.');
    }
    return miniGameVocabCache;
}

function getMiniGameSectionPool(sectionCodes = []) {
    const codes = new Set((Array.isArray(sectionCodes) ? sectionCodes : [sectionCodes]).map(String));
    const pool = Array.isArray(allQuestionsFlatCache) ? allQuestionsFlatCache : [];
    return pool
        .filter(q => codes.has(String(q.sub_topic || '')))
        .map(q => ({
            ...q,
            options: Array.isArray(q.options) ? q.options.slice() : [],
            options_ipa: Array.isArray(q.options_ipa) ? q.options_ipa.slice() : q.options_ipa
        }));
}

async function ensureMiniGameLearningReady(sectionCodes = []) {
    await fetchAllQuestionsFlat();
    const pool = getMiniGameSectionPool(sectionCodes);
    if (!pool.length) {
        throw new Error(`Không tìm thấy học liệu cho Chuyên mục ${[].concat(sectionCodes).join(', ')}.`);
    }
    return pool;
}

// File đề thi Tiếng Anh Lớp 1 dùng mảng PHẲNG "exams", mỗi đề gắn "exam_category"
// ("Học Kỳ I" / "Học Kỳ II" / "Học Sinh Giỏi") để phân loại — KHÁC với bản Lớp 2 cũ (3 mảng
// semester_1_exams/semester_2_exams/hsg_exams riêng biệt). Nạp 1 lần rồi tự gom nhóm lại
// đúng 3 mảng ấy để toàn bộ code phía dưới (examFileMap, startRandomExam...) không cần đổi gì thêm.
const EXAM_CATEGORY_TO_ARRAY_KEY = {
    'Học Kỳ I': 'semester_1_exams',
    'Học Kỳ II': 'semester_2_exams',
    'Học Sinh Giỏi': 'hsg_exams'
};

async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const raw = await res.json();

    const data = { semester_1_exams: [], semester_2_exams: [], hsg_exams: [] };
    (raw.exams || []).forEach(ex => {
        const arrayKey = EXAM_CATEGORY_TO_ARRAY_KEY[ex.exam_category] || 'semester_1_exams';
        data[arrayKey].push({
            ...ex,
            exam_title: ex.exam_name,
            questions: (ex.questions || []).map(q => normalizeQuestion({ ...q, diem: q.points ?? q.diem })).filter(Boolean)
        });
    });

    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let totalExamsCount = 3;
    try {
        const examData = await loadExamDataFile('de_thi_tieng_anh_1.json');
        if (examData) {
            totalExamsCount = ['semester_1_exams', 'semester_2_exams', 'hsg_exams']
                .reduce((sum, k) => sum + (Array.isArray(examData[k]) ? examData[k].length : 0), 0);
        }
    } catch (e) {}

    // Thẻ "1. Alphabet & IPA" luôn đứng ĐẦU TIÊN (đúng đúng thứ tự Chuyên Mục 1 trong khung V6)
    let html = `
        <div onclick="openAlphabetIPA()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-violet-400 transition-all group bg-gradient-to-br from-white to-violet-50/50 min-h-[92px]">
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-violet-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-violet-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🔤</div>
                <h3 class="font-extrabold text-violet-700 text-sm md:text-base leading-tight">1. Alphabet & IPA</h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-violet-100 text-[11px] font-bold text-gray-500">
                <span>Bảng chữ cái & ngữ âm</span>
                <span class="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">26 chữ + 44 âm</span>
            </div>
        </div>
    `;

    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật';

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px]">
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight flex items-center gap-1.5">${t.title}${Number(t.id) === 11 ? '<i class="fa-solid fa-lock text-[10px] opacity-75" title="Tài khoản VIP / dùng thử"></i>' : ''}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>
        `;
    });

    html += `
        <div onclick="openExamHub()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[92px]">
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight flex items-center gap-1.5">12. Đấu trường đề thi <i class="fa-solid fa-lock text-[10px] opacity-75" title="Tài khoản VIP / dùng thử"></i></h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-amber-100 text-[11px] font-bold text-gray-500">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${totalExamsCount} đề thi</span>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    const arrayKey = examFileMap[categoryKey]?.arrayKey || 'semester_1_exams';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_tieng_anh_1.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData[arrayKey])) ? examData[arrayKey] : [];
        if (!pool.length) return alert('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const examIndex = Math.floor(Math.random() * pool.length);
        const exam = pool[examIndex];
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = { categoryKey, examIndex, examTitle };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) return alert('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            alert('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    stopSpeaking();
    if (!requirePremiumAccess('Đấu trường đề thi')) return;
    inAlphaIpaFlow = false;
    inMiniGameFlow = false;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_tieng_anh_1.json'); } catch (e) {}

    const getCount = (categoryKey) => {
        const arrayKey = examFileMap[categoryKey]?.arrayKey;
        if (!examData || !Array.isArray(examData[arrayKey])) return 0;
        return examData[arrayKey].length;
    };

    const countHK1 = getCount('hocky1');
    const countHK2 = getCount('hocky2');
    const countHSG = getCount('hsg');

    let html = `
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">📘</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">📗</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">👑</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// CHUYÊN MỤC 1: ALPHABET & IPA (bê nguyên nội dung từ chương trình cũ)
// ==========================================
let alphabetIpaLoaded = false;
let currentAlphabetIndex = 0;
let currentIPAIndex = 0;
let inAlphaIpaFlow = false;
let inMiniGameFlow = false;

async function loadAlphabetIPAData() {
    if (alphabetIpaLoaded) return;
    const [alphaRes, ipaRes] = await Promise.all([
        fetch('assets/data/alphabet_english_1.json').then(r => r.json()),
        fetch('assets/data/ipa_english_1.json').then(r => r.json())
    ]);
    ALPHABET_DATA = alphaRes;
    IPA_DATA = ipaRes;
    alphabetIpaLoaded = true;
}

async function openAlphabetIPA() {
    stopSpeaking();
    activeTopicId = null; activeExamContext = null; activeRoadmapContext = null; pendingTopicQuiz = null;
    inAlphaIpaFlow = true;
    updateNavTabs("1. Alphabet & IPA", "🔤", null);
    showLoadingOverlay("Đang tải bảng chữ cái & ngữ âm...");
    try {
        await loadAlphabetIPAData();
        let phonicsCount = 0;
        try {
            const flat = await fetchAllQuestionsFlat();
            phonicsCount = flat.filter(q => Math.floor(Number(q.sub_topic)) === 1).length;
        } catch (e) {}
        hideLoadingOverlay();
        renderAlphaIPAMenu(phonicsCount);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không tải được dữ liệu Alphabet & IPA: ' + err.message);
    }
}

// Màn hình chọn 1 trong 3 mục nhỏ — dùng ĐÚNG khung "view-lecture" chuẩn (đồng bộ với mọi chuyên mục khác),
// chỉ khác ở chỗ 3 nút bấm dẫn sang 3 màn hình riêng (Alphabet, IPA, Phonics Matcher) thay vì bốc câu hỏi.
function renderAlphaIPAMenu(phonicsCount = 0) {
    document.getElementById('lecture-title').textContent = '1. Alphabet & IPA';
    document.getElementById('lecture-content').textContent = 'Chào con, đây là góc làm quen với bảng chữ cái và ngữ âm tiếng Anh! Con hãy chọn 1 mục nhỏ bên dưới để bắt đầu nhé.';
    document.getElementById('view-lecture').dataset.audioText = 'Chào con, đây là góc làm quen với bảng chữ cái và ngữ âm tiếng Anh! Con hãy chọn 1 mục nhỏ bên dưới để bắt đầu nhé.';

    const items = [
        { label: 'Alphabet (A-Z)', count: '26 chữ', action: "openAlphabetMenu(0)", style: SUBTOPIC_PALETTES[0] },
        { label: 'Bảng ngữ âm IPA', count: '44 âm', action: "openIPAMenu(0)", style: SUBTOPIC_PALETTES[1] },
        { label: 'Phonics Matcher', count: `${phonicsCount} câu`, action: "openPhonicsMatcher()", style: SUBTOPIC_PALETTES[2] }
    ];
    document.getElementById('lecture-subtopics-list').innerHTML = items.map((it, idx) => `
        <button onclick="${it.action}" class="p-3 ${it.style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
            <span class="text-sm md:text-base leading-snug"><strong class="${it.style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(it.label)}</span>
            <span class="text-xs font-extrabold ${it.style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${it.count}</span>
        </button>`).join('');
    setSubtopicGridColumns(items.length);

    // Không có khái niệm "học trộn tất cả" ở đây vì 1.1/1.2 là bảng tra cứu tĩnh, 1.3 mới là luyện tập thật
    document.getElementById('wrap-mix-all-subtopics').classList.add('hidden');

    updateNavTabs("1. Alphabet & IPA", "🔤", null);
    switchAppView('view-lecture');
}

// ---------- 1.1 ALPHABET A-Z ----------
function openAlphabetMenu(index = 0) {
    stopSpeaking();
    inAlphaIpaFlow = true;
    if (index < 0) index = 0;
    if (index >= ALPHABET_DATA.length) index = ALPHABET_DATA.length - 1;
    currentAlphabetIndex = index;
    updateNavTabs("1. Alphabet & IPA", "🔤", "Alphabet A-Z");
    switchAppView('view-alphabet');

    const item = ALPHABET_DATA[index];
    const keyboardHtml = ALPHABET_DATA.map((alpha, idx) => {
        const isActive = idx === currentAlphabetIndex;
        return `<button onclick="openAlphabetMenu(${idx})" class="pastel-btn flex flex-col items-center justify-center rounded-xl p-1.5 shadow-sm cursor-pointer ${isActive ? 'bg-pink-500 text-white border-2 border-pink-600 scale-105 ring-2 ring-pink-200' : 'bg-white text-gray-700 border border-gray-200 hover:bg-pink-50 hover:border-pink-300'} min-w-[52px] min-h-[52px]">
            <span class="text-base font-black">${alpha.letter}</span>
            <span class="font-bold ${isActive ? 'text-white' : 'text-pink-600'} text-xs md:text-sm">${alpha.ipaName}</span>
        </button>`;
    }).join('');

    const wordCard = (w, idx) => `
        <div onclick="speakAlphaWord(${index},${idx})" class="card-hover bg-white border-2 border-emerald-300 hover:border-emerald-500 rounded-xl p-2.5 flex flex-col items-center justify-center cursor-pointer shadow-sm">
            <div class="text-3xl mb-1">${w.emoji}</div>
            <div class="flex items-center gap-1"><span class="text-sm font-black text-emerald-800">${escapeHtml(w.en)}</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 font-bold">${w.pos || ''}</span></div>
            <div class="text-emerald-600 text-base mt-0.5">${w.ipa}</div>
            <div class="text-xs font-extrabold text-gray-600 my-0.5">${escapeHtml(w.vi)}</div>
            <div class="text-[10px] font-bold text-gray-400 mb-1.5">"${escapeHtml(w.ex || '')}"</div>
            <span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-black px-2 py-0.5 rounded-lg">🔊 Listen</span>
        </div>`;

    document.getElementById('alphaipa-content').innerHTML = `
        <div class="w-full max-w-4xl flex flex-col items-center">
            <div class="mb-2 text-center">
                <h2 class="text-lg md:text-xl font-black text-pink-600 mb-0.5">🔤 ENGLISH ALPHABET & PHONICS (A-Z)</h2>
                <p class="text-xs font-bold text-gray-500">Bấm vào chữ cái hoặc từ mẫu để nghe phát âm:</p>
                <button onclick="speakAlphabetLetter(${index})" class="pastel-btn mt-1.5 bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-300 font-extrabold px-3.5 py-1 rounded-xl text-xs flex items-center justify-center gap-1 mx-auto shadow-sm cursor-pointer">
                    <i class="fa-solid fa-volume-high"></i><span>Listen to Letter ${item.letter}</span>
                </button>
            </div>
            <div class="bg-pink-50/60 border-2 border-dashed border-pink-300 rounded-2xl p-3 md:p-3.5 w-full mb-3 shadow-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 items-stretch">
                    <div onclick="speakAlphabetLetter(${index})" class="card-hover bg-white border-2 border-pink-400 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer shadow-sm bg-gradient-to-b from-white to-pink-50">
                        <div class="text-5xl md:text-6xl font-black text-pink-600 mb-1">${item.name}</div>
                        <div class="text-xs font-extrabold text-gray-600 mb-2">Cách đọc: <b class="text-purple-600 text-lg">${item.ipaName}</b></div>
                        <span class="bg-pink-100 text-pink-700 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-pink-200">👆 Tap to Listen</span>
                    </div>
                    ${wordCard(item.word1, 1)}${wordCard(item.word2, 2)}${wordCard(item.word3, 3)}
                </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-2xl p-2.5 w-full shadow-inner mb-2.5">
                <div class="flex flex-wrap items-center justify-center gap-1">${keyboardHtml}</div>
            </div>
            <div class="flex items-center justify-center space-x-3 mt-1">
                <button onclick="openAlphabetMenu(${index - 1})" class="pastel-btn bg-sky-50 hover:bg-sky-100 text-sky-600 border-2 border-sky-300 font-black text-xs md:text-sm px-4 py-2 rounded-xl shadow-sm flex items-center space-x-1 cursor-pointer ${index <= 0 ? 'opacity-40 pointer-events-none' : ''}"><i class="fa-solid fa-arrow-left"></i><span>Previous</span></button>
                <button onclick="openPhonicsMatcher()" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 font-black text-xs md:text-sm px-5 py-2 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer"><span>🎯 Phonics Quiz</span></button>
                <button onclick="openAlphabetMenu(${index + 1})" class="pastel-btn bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs md:text-sm px-5 py-2 rounded-xl shadow-sm flex items-center space-x-1 cursor-pointer ${index >= ALPHABET_DATA.length - 1 ? 'opacity-40 pointer-events-none' : ''}"><span>Next</span><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>`;
    speakAlphabetLetter(index);
}
function speakAlphabetLetter(index) { const item = ALPHABET_DATA[index]; if (item) speakEnglish(item.letter); }
function speakAlphaWord(index, wordNum) { const item = ALPHABET_DATA[index]; const w = item['word' + wordNum]; if (w) speakEnglish(w.en); }

// ---------- 1.2 IPA 44 SOUNDS ----------
function openIPAMenu(index = 0) {
    stopSpeaking();
    inAlphaIpaFlow = true;
    if (index < 0) index = 0;
    if (index >= IPA_DATA.length) index = IPA_DATA.length - 1;
    currentIPAIndex = index;
    updateNavTabs("1. Alphabet & IPA", "🔤", "Bảng ngữ âm IPA (44 âm)");
    switchAppView('view-alphabet');

    const item = IPA_DATA[currentIPAIndex];
    const soundButtonsHtml = IPA_DATA.map((snd, idx) => {
        const isActive = idx === currentIPAIndex;
        let badgeColor = isActive ? 'bg-pink-600 text-white border-pink-700' : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100';
        if (snd.type === 'vowel_di') badgeColor = isActive ? 'bg-purple-600 text-white border-purple-700' : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100';
        else if (snd.type && snd.type.startsWith('consonant')) badgeColor = isActive ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
        return `<button onclick="openIPAMenu(${idx})" class="pastel-btn flex flex-col items-center justify-center rounded-xl p-1 shadow-sm border ${badgeColor} min-w-[50px] min-h-[46px] cursor-pointer ${isActive ? 'scale-105 ring-2 ring-pink-300 font-black' : ''}">
            <span class="text-base md:text-lg font-black">${snd.ipa}</span>
            <span class="text-[8px] font-bold opacity-80 line-clamp-1">${(snd.name || '').split(' ')[0]}</span>
        </button>`;
    }).join('');

    const examplesHtml = (item.words || []).map((w, wIdx) => `
        <div onclick="speakIPAExampleWord(${currentIPAIndex},${wIdx})" class="card-hover bg-white border-2 border-emerald-300 hover:border-emerald-500 rounded-xl p-2.5 flex flex-col items-center justify-center cursor-pointer shadow-sm text-center">
            <div class="text-3xl mb-1">${w.emoji}</div>
            <div class="flex items-center gap-1"><span class="text-sm md:text-base font-black text-emerald-800">${escapeHtml(w.word)}</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 font-bold">${w.pos || ''}</span></div>
            <div class="text-emerald-600 text-sm md:text-base font-bold my-0.5">${w.ipa}</div>
            <div class="text-xs font-extrabold text-gray-700">${escapeHtml(w.vi)}</div>
            <div class="text-[10px] font-bold text-gray-400 mt-1 italic">"${escapeHtml(w.ex || '')}"</div>
            <span class="mt-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-[9px] font-black px-2.5 py-0.5 rounded-lg">🔊 Listen Word</span>
        </div>`).join('');

    let typeTag = 'Nguyên âm đơn (Monophthong)', typeBg = 'bg-pink-100 text-pink-700 border-pink-300';
    if (item.type === 'vowel_di') { typeTag = 'Nguyên âm đôi (Diphthong)'; typeBg = 'bg-purple-100 text-purple-700 border-purple-300'; }
    else if (item.type === 'consonant_unvoiced') { typeTag = 'Phụ âm vô thanh (Voiceless)'; typeBg = 'bg-blue-100 text-blue-700 border-blue-300'; }
    else if (item.type === 'consonant_voiced') { typeTag = 'Phụ âm hữu thanh (Voiced)'; typeBg = 'bg-emerald-100 text-emerald-700 border-emerald-300'; }

    document.getElementById('alphaipa-content').innerHTML = `
        <div class="w-full max-w-5xl flex flex-col items-center">
            <div class="mb-2 text-center w-full">
                <div class="flex items-center justify-between flex-wrap gap-1 mb-1">
                    <span class="text-xs font-black bg-pink-100 text-pink-700 px-3 py-1 rounded-xl shadow-sm">Âm ${currentIPAIndex + 1} / ${IPA_DATA.length} IPA</span>
                    <h2 class="text-base md:text-xl font-black text-pink-600 flex items-center justify-center gap-1.5"><span>🗣️</span><span>BẢNG PHIÊN ÂM QUỐC TẾ IPA</span><span>🎙️</span></h2>
                    <button onclick="openPhonicsMatcher()" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 text-xs font-black px-3.5 py-1 rounded-xl shadow-sm flex items-center gap-1 cursor-pointer"><span>🎯 IPA Quiz</span></button>
                </div>
                <p class="text-xs font-bold text-gray-500">Bấm vào bất kỳ âm IPA nào để nghe phát âm chuẩn và xem hướng dẫn chi tiết:</p>
            </div>
            <div class="bg-gradient-to-r from-pink-50/80 via-purple-50/80 to-indigo-50/80 border-2 border-dashed border-pink-300 rounded-2xl p-3 md:p-4 w-full mb-3 shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    <div class="md:col-span-5 bg-white/95 rounded-2xl p-3 border border-pink-200 shadow-sm flex flex-col items-center justify-between text-center">
                        <div>
                            <span class="text-[10px] md:text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${typeBg} inline-block mb-1.5">${typeTag}</span>
                            <div onclick="speakIPASound(${currentIPAIndex})" class="cursor-pointer group">
                                <div class="text-5xl md:text-6xl font-black text-pink-600 drop-shadow-sm group-hover:scale-105 transition transform">${item.ipa}</div>
                                <div class="text-xs md:text-sm font-black text-purple-700 mt-1">${escapeHtml(item.name)}</div>
                            </div>
                        </div>
                        <div class="my-2.5 bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 text-left w-full shadow-inner">
                            <div class="text-[11px] font-black text-amber-800 uppercase tracking-wide flex items-center gap-1 mb-1"><i class="fa-solid fa-lightbulb text-amber-500"></i><span>Hướng dẫn phát âm chuẩn:</span></div>
                            <p class="text-xs font-bold text-gray-700 leading-relaxed">${escapeHtml(item.guide || '')}</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 w-full mt-auto">
                            <button onclick="speakIPASound(${currentIPAIndex})" class="pastel-btn flex-1 bg-pink-500 hover:bg-pink-600 text-white font-black text-xs py-2 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"><i class="fa-solid fa-volume-high"></i><span>Nghe âm ${item.ipa}</span></button>
                            <button onclick="speakIPAGuideVietnamese(${currentIPAIndex})" class="pastel-btn bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-300 font-black text-xs py-2 px-2.5 rounded-xl shadow-sm flex items-center justify-center gap-1 cursor-pointer"><i class="fa-solid fa-language"></i><span>Đọc hướng dẫn</span></button>
                        </div>
                    </div>
                    <div class="md:col-span-7 flex flex-col justify-between">
                        <div class="text-left mb-1.5 flex items-center justify-between">
                            <span class="text-xs font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i><span>3 VÍ DỤ TỪ VỰNG CHUẨN CỦA ÂM ${item.ipa}:</span></span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 items-stretch">${examplesHtml}</div>
                        <div class="mt-2 text-center text-[11px] font-bold text-gray-400">👆 Chạm vào từng thẻ để nghe phát âm từ vựng và câu ví dụ sinh động!</div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-2xl p-2.5 w-full shadow-inner mb-2.5">
                <div class="flex flex-wrap items-center justify-center gap-1">${soundButtonsHtml}</div>
            </div>
            <div class="flex items-center justify-center space-x-3">
                <button onclick="openIPAMenu(${currentIPAIndex - 1})" class="pastel-btn bg-sky-50 hover:bg-sky-100 text-sky-600 border-2 border-sky-300 font-black text-sm px-5 py-2 rounded-xl shadow-sm flex items-center space-x-1.5 cursor-pointer ${currentIPAIndex <= 0 ? 'opacity-40 pointer-events-none' : ''}"><i class="fa-solid fa-arrow-left"></i><span>Previous Sound</span></button>
                <button onclick="openIPAMenu(${currentIPAIndex + 1})" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 font-black text-sm px-6 py-2 rounded-xl shadow-md flex items-center space-x-1.5 cursor-pointer ${currentIPAIndex >= IPA_DATA.length - 1 ? 'opacity-40 pointer-events-none' : ''}"><span>Next Sound</span><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>`;
    speakIPASound(currentIPAIndex);
}
function speakIPASound(index) { const item = IPA_DATA[index]; if (item) speakEnglish(item.soundWord || item.ipa); }
function speakIPAGuideVietnamese(index) { const item = IPA_DATA[index]; if (item) speakVietnamese(item.guide || ''); }
function speakIPAExampleWord(index, wordIdx) { const item = IPA_DATA[index]; const w = item.words && item.words[wordIdx]; if (w) speakEnglish(w.word); }

// ---------- 1.3 PHONICS MATCHER (dùng đúng ngân hàng câu hỏi thật, chuyên mục 1) ----------
function openPhonicsMatcher() {
    stopSpeaking();
    showLoadingOverlay("Đang tải Phonics Matcher...");
    fetchAllQuestionsFlat().then(flat => {
        hideLoadingOverlay();
        const questions = shuffleArray(flat.filter(q => Math.floor(Number(q.sub_topic)) === 1));
        if (!questions.length) return alert('Đang cập nhật thêm câu hỏi cho Phonics Matcher, bé quay lại sau nhé!');
        activeTopicId = 1;
        pendingTopicQuiz = null; activeExamContext = null; activeRoadmapContext = null;
        practiceCycleRawPool = [...questions];
        updateNavTabs("1. Alphabet & IPA", "🔤", "1.3 Phonics Matcher");
        startTopicQuiz(1, '1.3 Phonics Matcher', questions, '1.3 Phonics Matcher');
    }).catch(err => { hideLoadingOverlay(); alert('Lỗi tải Phonics Matcher: ' + err.message); });
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🔢';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
    } else {
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (inMiniGameFlow) {
        openMiniGameHub();
    } else if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        // Render lại đúng danh sách mục nhỏ CẤP 1 (không phải màn chọn Nhóm Kép cấp 3 vừa hiện trước đó)
        showLectureAndSubtopics(pendingTopicQuiz.topicNum, pendingTopicQuiz.topicName, { questions: pendingTopicQuiz.questions });
    } else if (inAlphaIpaFlow) {
        // Đang duyệt Alphabet A-Z hoặc Bảng IPA (không phải quiz) -> quay về đúng menu 3 lựa chọn
        openAlphabetIPA();
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-alphabet', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-minigame-hub', 'view-game-play', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inAlphaIpaFlow = false;
    inMiniGameFlow = false;
    updateNavTabs(null, null, null);
    switchAppView('view-dashboard-grid');
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

let maHSPreviewTimer = null;
let maHSPreviewRequestSeq = 0;

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    const preview = document.getElementById('mahs-preview');
    if (!preview) return;

    clearTimeout(maHSPreviewTimer);
    if (!lop || !stt) {
        preview.textContent = '--';
        return;
    }

    const baseId = `${lop}-${stt.padStart(2, '0')}`;
    preview.textContent = baseId;

    const requestSeq = ++maHSPreviewRequestSeq;
    maHSPreviewTimer = setTimeout(async () => {
        try {
            preview.textContent = 'Đang kiểm tra...';
            const result = await callAppsScript('getAvailableStudentId', { lop, soThuTu: stt });
            if (requestSeq !== maHSPreviewRequestSeq) return;
            preview.textContent = result?.ok && result.maHS ? result.maHS : baseId;
        } catch (e) {
            if (requestSeq === maHSPreviewRequestSeq) preview.textContent = baseId;
        }
    }, 350);
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

let adminAccountsCache = [];
let adminAccountSort = { key: 'maHS', direction: 'asc' };

function isAdminUser() {
    return !!currentUser && !currentUser.isGuest && String(currentUser.role || '').toLowerCase() === 'admin';
}

function normalizeAccountTypeClient(value) {
    const raw = String(value || '').trim().toLowerCase();
    if (raw === 'trial') return 'trial';
    if (raw === 'vip') return 'vip';
    return 'regular';
}

function getAccountTypeLabel(value) {
    const type = normalizeAccountTypeClient(value);
    if (type === 'trial') return 'Trial';
    if (type === 'vip') return 'VIP';
    return 'Regular';
}

function parseAccountDate(value) {
    if (!value) return null;
    if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
    const raw = String(value).trim();
    if (!raw) return null;

    // dd-mm-yy / dd-mm-yyyy / dd/mm/yy / dd/mm/yyyy
    const m = raw.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{2}|\d{4})$/);
    if (m) {
        let year = Number(m[3]);
        if (year < 100) year += 2000;
        const d = new Date(year, Number(m[2]) - 1, Number(m[1]), 23, 59, 59, 999);
        return Number.isNaN(d.getTime()) ? null : d;
    }

    const d = new Date(raw);
    return Number.isNaN(d.getTime()) ? null : d;
}

function getTrialEndDate() {
    return parseAccountDate(currentUser?.hanDungThu);
}

function getVipEndDate() {
    return parseAccountDate(currentUser?.hanVIP);
}

function hasPremiumAccess() {
    if (isAdminUser()) return true;
    if (!currentUser || currentUser.isGuest) return false;

    const type = normalizeAccountTypeClient(currentUser.loaiTaiKhoan);
    const now = Date.now();
    if (type === 'trial') {
        const end = getTrialEndDate();
        return !!end && end.getTime() >= now;
    }
    if (type === 'vip') {
        const end = getVipEndDate();
        return !!end && end.getTime() >= now;
    }
    return false;
}

function closePremiumAccessModal() {
    document.getElementById('premium-access-modal')?.remove();
}

function renderPremiumAccessModal({ icon = '🐰', title = 'Cô giáo Thỏ Hồng', message = '', mode = 'info' }) {
    closePremiumAccessModal();

    const isGuest = mode === 'guest';
    const modal = document.createElement('div');
    modal.id = 'premium-access-modal';
    modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="absolute inset-0 bg-slate-900/45 backdrop-blur-[2px]" data-premium-close></div>
        <div class="relative w-full max-w-md overflow-hidden rounded-[28px] border-2 border-pink-200 bg-white shadow-2xl animate-[popIn_.18s_ease-out]">
            <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-pink-100/80"></div>
            <div class="absolute -left-6 bottom-10 h-20 w-20 rounded-full bg-purple-100/70"></div>

            <div class="relative px-6 pb-6 pt-7 text-center">
                <button type="button" data-premium-close class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-xl font-black text-pink-400 transition hover:bg-pink-100" aria-label="Đóng">×</button>

                <div class="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-100 to-purple-100 text-5xl shadow-lg">${icon}</div>
                <div class="mb-1 text-sm font-extrabold uppercase tracking-[0.18em] text-pink-400">Cô giáo Thỏ Hồng</div>
                <h3 class="mb-3 text-xl font-black text-purple-700">${title}</h3>
                <p class="mx-auto max-w-sm text-[15px] font-semibold leading-7 text-slate-600">${message}</p>

                <div class="mt-5 rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-3 text-sm font-bold text-purple-600">
                    🌻 Các chuyên đề cơ bản vẫn học miễn phí bình thường nhé!
                </div>

                <div class="mt-5 flex ${isGuest ? 'gap-3' : ''} justify-center">
                    ${isGuest ? `
                        <button type="button" data-premium-login class="flex-1 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-3 font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">🔑 Sign in</button>
                        <button type="button" data-premium-signup class="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 px-4 py-3 font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">✨ Sign up</button>
                    ` : `
                        <button type="button" data-premium-close class="min-w-40 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">💗 Bé hiểu rồi</button>
                    `}
                </div>
            </div>
        </div>`;

    document.body.appendChild(modal);

    modal.querySelectorAll('[data-premium-close]').forEach(el => {
        el.addEventListener('click', closePremiumAccessModal);
    });
    modal.querySelector('[data-premium-login]')?.addEventListener('click', () => {
        closePremiumAccessModal();
        openAuthScreen('login');
    });
    modal.querySelector('[data-premium-signup]')?.addEventListener('click', () => {
        closePremiumAccessModal();
        openAuthScreen('register');
    });
}

function showPremiumAccessWarning(featureName = 'khu vực này') {
    if (!currentUser || currentUser.isGuest) {
        renderPremiumAccessModal({
            icon: '🐰🔒',
            title: `${featureName}`,
            message: `Đây là ${featureName} dành cho tài khoản Trial hoặc VIP.<br>Con có thể Sign in nếu đã có tài khoản hoặc Sign up để đăng ký nhé!<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`,
            mode: 'guest'
        });
        return;
    }

    const type = normalizeAccountTypeClient(currentUser.loaiTaiKhoan);
    if (type === 'trial') {
        renderPremiumAccessModal({
            icon: '🐰⏰',
            title: 'Trial của bé đã hết hạn',
            message: `Tài khoản đã trở về Regular. Bé hãy nhờ Admin cấp lại Trial hoặc nâng lên VIP để tiếp tục sử dụng ${featureName} nhé!`
        });
        return;
    }
    if (type === 'vip') {
        renderPremiumAccessModal({
            icon: '🐰👑',
            title: 'VIP của bé đã hết hạn',
            message: `Tài khoản đã trở về Regular. Bé hãy gia hạn VIP để tiếp tục sử dụng ${featureName} nhé!`
        });
        return;
    }

    renderPremiumAccessModal({
        icon: '🐰⭐',
        title: `${featureName}`,
        message: `Đây là ${featureName} dành cho tài khoản Trial hoặc VIP.<br>Tài khoản của con hiện là Regular. Con hãy nhờ Admin nâng lên Trial hoặc VIP nhé!<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`
    });
}

function requirePremiumAccess(featureName) {
    if (hasPremiumAccess()) return true;
    showPremiumAccessWarning(featureName);
    return false;
}

function openAuthScreen(tab = 'login') {
    stopSpeaking();
    document.getElementById('screen-dashboard')?.classList.add('hidden');
    document.getElementById('screen-login')?.classList.remove('hidden');
    switchAuthTab(tab);
    hideAuthError();
}

function returnToGuestHome() {
    if (!currentUser || currentUser.isGuest) {
        handleGuestMode(true);
        return;
    }
    document.getElementById('screen-login')?.classList.add('hidden');
    document.getElementById('screen-dashboard')?.classList.remove('hidden');
    goHome();
}

function getAdminCredentials() {
    return {
        adminMaHS: currentUser?.maHS || localStorage.getItem('tv1_mahs') || '',
        adminPin: localStorage.getItem('tv1_mapin') || ''
    };
}

async function callAdminAction(action, extraPayload = {}) {
    if (!isAdminUser()) throw new Error('Tài khoản hiện tại không có quyền Admin.');
    return callAppsScript(action, { ...getAdminCredentials(), ...extraPayload });
}

function formatAdminDate(value) {
    const d = parseAccountDate(value);
    if (!d) return '–';
    return d.toLocaleDateString('vi-VN');
}

function getAdminSortValue(acc, key) {
    if (key === 'ngayDangKy' || key === 'hanDungThu' || key === 'hanVIP') {
        const d = parseAccountDate(acc[key]);
        return d ? d.getTime() : null;
    }
    if (key === 'loaiTaiKhoan') {
        const order = { regular: 0, trial: 1, vip: 2 };
        return order[normalizeAccountTypeClient(acc[key])] ?? 0;
    }
    return String(acc[key] || '').trim().toLocaleLowerCase('vi');
}

function sortAdminAccounts(accounts) {
    const { key, direction } = adminAccountSort;
    const factor = direction === 'desc' ? -1 : 1;
    return [...accounts].sort((a, b) => {
        const av = getAdminSortValue(a, key);
        const bv = getAdminSortValue(b, key);
        // Ô ngày trống luôn nằm cuối bảng; ngày hợp lệ luôn so sánh bằng timestamp thật.
        if (av === null && bv === null) return 0;
        if (av === null) return 1;
        if (bv === null) return -1;
        if (typeof av === 'number' && typeof bv === 'number') {
            if (av === bv) return String(a.maHS || '').localeCompare(String(b.maHS || ''), 'vi', { numeric: true }) * factor;
            return (av - bv) * factor;
        }
        const cmp = String(av).localeCompare(String(bv), 'vi', { numeric: true, sensitivity: 'base' });
        return cmp * factor;
    });
}

function getAdminSortIcon(key) {
    if (adminAccountSort.key !== key) return '<span class="ml-1 text-purple-200">↕</span>';
    return adminAccountSort.direction === 'asc'
        ? '<span class="ml-1 text-purple-500">▲</span>'
        : '<span class="ml-1 text-purple-500">▼</span>';
}

function sortAdminAccountsBy(key) {
    if (adminAccountSort.key === key) {
        adminAccountSort.direction = adminAccountSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        adminAccountSort = { key, direction: 'asc' };
    }
    renderAdminAccountsTable();
}

async function openAdminAccountsModal() {
    if (!isAdminUser()) return;
    let modal = document.getElementById('modal-admin-accounts');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-admin-accounts';
        modal.className = 'fixed inset-0 z-[130] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3';
        modal.innerHTML = `
            <div class="w-full max-w-6xl max-h-[92vh] bg-white rounded-[28px] border-2 border-pink-200 shadow-2xl flex flex-col overflow-hidden">
                <div class="px-4 md:px-6 py-4 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border-b border-pink-100 flex items-start justify-between gap-3">
                    <div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <h3 class="text-base md:text-lg font-black text-purple-700">👥 Quản lý tài khoản</h3>
                            <span id="admin-accounts-summary" class="px-2.5 py-1 rounded-full bg-white border border-purple-200 text-purple-600 text-[10px] md:text-xs font-extrabold">Đang tải...</span>
                        </div>
                        <p class="text-[10px] md:text-xs font-semibold text-gray-500 mt-1">Chuyển hạng tài khoản Regular / Trial / VIP. Trial có hạn 1 tháng, VIP có hạn 1 năm.</p>
                    </div>
                    <button onclick="closeAdminAccountsModal()" class="w-9 h-9 shrink-0 rounded-xl bg-white border border-pink-200 text-pink-500 hover:bg-pink-100 font-black">✕</button>
                </div>
                <div class="p-3 md:p-4 overflow-auto flex-1">
                    <div id="admin-accounts-loading" class="py-10 text-center text-sm font-bold text-gray-400">⏳ Đang tải tài khoản...</div>
                    <div id="admin-accounts-table-wrap" class="hidden overflow-x-auto rounded-2xl border border-pink-100">
                        <table class="w-full min-w-[1040px] text-xs md:text-sm border-collapse">
                            <thead><tr class="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700">
                                <th onclick="sortAdminAccountsBy('maHS')" class="p-3 border-b border-pink-100 text-left cursor-pointer select-none hover:bg-purple-100/60">Mã HS <span data-sort-icon="maHS"></span></th>
                                <th onclick="sortAdminAccountsBy('hoTen')" class="p-3 border-b border-pink-100 text-left cursor-pointer select-none hover:bg-purple-100/60">Họ tên <span data-sort-icon="hoTen"></span></th>
                                <th onclick="sortAdminAccountsBy('lop')" class="p-3 border-b border-pink-100 cursor-pointer select-none hover:bg-purple-100/60">Lớp <span data-sort-icon="lop"></span></th>
                                <th onclick="sortAdminAccountsBy('ngayDangKy')" class="p-3 border-b border-pink-100 cursor-pointer select-none hover:bg-purple-100/60 whitespace-nowrap">Ngày đăng ký <span data-sort-icon="ngayDangKy"></span></th>
                                <th onclick="sortAdminAccountsBy('loaiTaiKhoan')" class="p-3 border-b border-pink-100 cursor-pointer select-none hover:bg-purple-100/60">Loại tài khoản <span data-sort-icon="loaiTaiKhoan"></span></th>
                                <th onclick="sortAdminAccountsBy('hanDungThu')" class="p-3 border-b border-pink-100 cursor-pointer select-none hover:bg-purple-100/60">Hạn dùng thử <span data-sort-icon="hanDungThu"></span></th>
                                <th onclick="sortAdminAccountsBy('hanVIP')" class="p-3 border-b border-pink-100 cursor-pointer select-none hover:bg-purple-100/60">Hạn VIP <span data-sort-icon="hanVIP"></span></th>
                            </tr></thead>
                            <tbody id="admin-accounts-body"></tbody>
                        </table>
                    </div>
                </div>
                <div class="px-4 md:px-6 py-3 border-t border-pink-100 bg-rose-50/40 flex items-center justify-between gap-3">
                    <div class="text-[10px] md:text-xs font-semibold text-gray-500">Regular: miễn phí • Trial: Premium 1 tháng • VIP: Premium 1 năm.</div>
                    <button onclick="loadAdminAccounts()" class="px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-600 text-xs font-extrabold hover:bg-purple-50">⟳ Làm mới</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    } else {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    await loadAdminAccounts();
}

function closeAdminAccountsModal() {
    const modal = document.getElementById('modal-admin-accounts');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

async function loadAdminAccounts() {
    const loading = document.getElementById('admin-accounts-loading');
    const wrap = document.getElementById('admin-accounts-table-wrap');
    if (loading) { loading.textContent = '⏳ Đang tải tài khoản...'; loading.classList.remove('hidden'); }
    if (wrap) wrap.classList.add('hidden');
    try {
        const result = await callAdminAction('listAccounts');
        if (!result.ok) throw new Error(result.error || 'Không tải được danh sách tài khoản.');
        adminAccountsCache = Array.isArray(result.accounts) ? result.accounts : [];
        renderAdminAccountsTable();
        if (loading) loading.classList.add('hidden');
        if (wrap) wrap.classList.remove('hidden');
    } catch (err) {
        if (loading) loading.textContent = '❌ ' + err.message;
    }
}

function renderAdminAccountsTable() {
    const body = document.getElementById('admin-accounts-body');
    const summary = document.getElementById('admin-accounts-summary');
    if (!body) return;

    if (summary) summary.textContent = `${adminAccountsCache.length} tài khoản`;
    document.querySelectorAll('#modal-admin-accounts [data-sort-icon]').forEach(el => {
        el.innerHTML = getAdminSortIcon(el.dataset.sortIcon);
    });

    if (adminAccountsCache.length === 0) {
        body.innerHTML = '<tr><td colspan="7" class="p-6 text-center text-gray-400 font-bold">Chưa có tài khoản học sinh nào.</td></tr>';
        return;
    }

    const sorted = sortAdminAccounts(adminAccountsCache);
    body.innerHTML = sorted.map(acc => {
        const safeId = escapeHtml(acc.maHS || '');
        const accountType = normalizeAccountTypeClient(acc.loaiTaiKhoan);
        const selectClass = accountType === 'vip'
            ? 'border-purple-300 bg-purple-50 text-purple-700'
            : accountType === 'trial'
                ? 'border-amber-300 bg-amber-50 text-amber-700'
                : 'border-sky-300 bg-sky-50 text-sky-700';

        return `<tr class="hover:bg-pink-50/40 transition-colors">
            <td class="p-3 border-b border-slate-100 text-left font-black text-slate-700">${safeId}</td>
            <td class="p-3 border-b border-slate-100 text-left font-bold text-slate-600">${escapeHtml(acc.hoTen || '')}</td>
            <td class="p-3 border-b border-slate-100 text-center font-bold text-slate-600">${escapeHtml(acc.lop || '–')}</td>
            <td class="p-3 border-b border-slate-100 text-center font-bold text-slate-500 whitespace-nowrap">${escapeHtml(formatAdminDate(acc.ngayDangKy))}</td>
            <td class="p-3 border-b border-slate-100 text-center">
                <select onchange="changeStudentAccountType('${safeId}', this.value)" class="min-w-[90px] rounded-xl border px-3 py-2 font-extrabold outline-none ${selectClass}">
                    <option value="regular" ${accountType === 'regular' ? 'selected' : ''}>Regular</option>
                    <option value="trial" ${accountType === 'trial' ? 'selected' : ''}>Trial</option>
                    <option value="vip" ${accountType === 'vip' ? 'selected' : ''}>VIP</option>
                </select>
            </td>
            <td class="p-3 border-b border-slate-100 text-center font-bold text-slate-500">${escapeHtml(formatAdminDate(acc.hanDungThu))}</td>
            <td class="p-3 border-b border-slate-100 text-center font-bold text-purple-600">${escapeHtml(formatAdminDate(acc.hanVIP))}</td>
        </tr>`;
    }).join('');
}

async function changeStudentAccountType(maHS, accountType) {
    if (!isAdminUser()) return;
    try {
        const result = await callAdminAction('updateAccountType', { targetMaHS: maHS, accountType });
        if (!result.ok) throw new Error(result.error || 'Không thể cập nhật loại tài khoản.');
        await loadAdminAccounts();
    } catch (err) {
        alert('Lỗi cập nhật loại tài khoản: ' + err.message);
        await loadAdminAccounts();
    }
}

async function doLogin() {
    hideAuthError();
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
            showAuthError(errMsg);
            alert(errMsg);
            return;
        }
        currentUser = { ...result.student, isGuest: false };
        localStorage.setItem('tv1_mahs', maHS);
        localStorage.setItem('tv1_mapin', maPin);
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 6 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            alert(result.error);
            return;
        }
        alert(`Đăng ký thành công! Mã ID của bé là: ${result.student.maHS}. Tài khoản mới là Regular: bé học miễn phí mục 1–10. Trial 1 tháng hoặc VIP 1 năm sẽ do Admin cấp khi cần nhé!`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    const maHS = localStorage.getItem('tv1_mahs');
    const maPin = localStorage.getItem('tv1_mapin');

    // Không có phiên đăng nhập đã lưu => vào thẳng trang chủ ở chế độ Guest.
    // Mục 1-10 luôn mở; Sign in / Sign up hiển thị trên header.
    if (!maHS || !maPin) {
        handleGuestMode(true);
        return;
    }

    showLoadingOverlay('Đang đăng nhập lại cho bé...');
    try {
        const res = await callAppsScript('login', { maHS: maHS.toUpperCase(), maPin });
        if (res.ok) {
            currentUser = { ...res.student, isGuest: false };
            enterDashboard(true);
        } else {
            localStorage.removeItem('tv1_mahs');
            localStorage.removeItem('tv1_mapin');
            handleGuestMode(true);
        }
    } catch (e) {
        handleGuestMode(true);
    } finally {
        hideLoadingOverlay();
    }
}

function logout() {
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    const mahsInput = document.getElementById('login-mahs');
    const mapinInput = document.getElementById('login-mapin');
    if (mahsInput) mahsInput.value = '';
    if (mapinInput) mapinInput.value = '';
    hideAuthError();
    handleGuestMode(true);
}

function handleGuestMode(isSilent = false) {
    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách", lop: "1A", maHS: "KHACH", loaiTaiKhoan: 'regular', hanDungThu: '', hanVIP: '' };
    enterDashboard(isSilent);
}

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();

    // Phát ngẫu nhiên lời chào sư phạm (Không nhạc)
    if (!isSilent) {
        setTimeout(() => {
            if (currentUser && !currentUser.isGuest) {
                const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
                const msg = template.replace('{name}', currentUser.hoTen);
                speakVietnamese(msg, 0.96);
            } else {
                const msg = GREETINGS_GUEST[Math.floor(Math.random() * GREETINGS_GUEST.length)];
                speakVietnamese(msg, 0.96);
            }
        }, 450);
    }
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        const adminBtn = isAdminUser() ? `
            <button onclick="openAdminAccountsModal()" title="Quản lý tài khoản"
                class="relative h-8 px-2.5 flex items-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl border border-purple-200 text-[10px] md:text-xs font-extrabold transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(147,51,234,0.35)]">
                <i class="fa-solid fa-users-gear"></i><span class="hidden lg:inline">Quản lý</span>
            </button>` : '';
        const roleLine = isAdminUser()
            ? `<div class="text-purple-600 font-semibold text-[10px]">ADMIN | Quản trị viên</div>`
            : (() => {
                const type = normalizeAccountTypeClient(currentUser.loaiTaiKhoan);
                const premiumLabel = getAccountTypeLabel(type);
                return `<div class="text-gray-500 font-semibold text-[10px]">ID: ${escapeHtml(currentUser.maHS)} | ${escapeHtml(premiumLabel)}</div>`;
            })();
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-pink-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen || currentUser.maHS)}</div>
                    ${roleLine}
                </div>
                ${adminBtn}
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 text-xs transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(244,63,94,0.55)]"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `
            <div class="flex items-center gap-1.5">
                <span class="text-amber-600 font-extrabold text-[10px] md:text-xs mr-0.5">Khách</span>
                <button onclick="openAuthScreen('login')" class="h-8 px-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-[10px] md:text-xs font-extrabold shadow-sm">Sign in</button>
                <button onclick="openAuthScreen('register')" class="h-8 px-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-200 text-[10px] md:text-xs font-extrabold shadow-sm">Sign up</button>
            </div>`;
    }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickProgressOrExam(type) {
    const feature = type === 'progress' ? 'Bản đồ tuần' : 'Đấu trường đề thi';
    if (!requirePremiumAccess(feature)) return;
    if (type === 'progress') openRoadmap();
    else if (type === 'exam') openExamHub();
}

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    stopSpeaking();
    if (Number(topicNum) === 11 && !requirePremiumAccess('Practice & Play')) return;
    inAlphaIpaFlow = false;
    inMiniGameFlow = false;
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🐰', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        updateNavTabs(null, null, null);
        alert(`Không thể tải chủ đề: ${err.message}`);
    });
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl';
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    document.getElementById('wrap-mix-all-subtopics').classList.remove('hidden');
    document.getElementById('btn-mix-all-subtopics').setAttribute('onclick', 'selectSubtopic(null)');
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || topicName;
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '';

    const groups = [], groupMap = {}, groupLabels = {};
    topicObj.questions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); groupLabels[k] = q.sub_topic_label || k; }
        groupMap[k].push(q);
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(groupLabels[subName]);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    setSubtopicGridColumns(groups.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

let pendingPairedGroupContext = null;

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;

    if (idx === null) {
        return launchSubtopicQuiz(topicNum, topicName, questions, null, null);
    }

    const subLabel = groups[idx];
    const pool = groupMap[subLabel];
    const displayLabel = beautifySubtopicName(groupLabels[subLabel]);

    // Vocabulary: 2.1 / 2.2 / 2.3 -> 6 chủ đề -> câu hỏi.
    const vocabularyTopics = Number(topicNum) === 2
        ? [...new Set(pool.map(q => q.content_topic).filter(Boolean))]
        : [];
    if (vocabularyTopics.length > 1) {
        return showVocabularyTopicMenu(topicNum, topicName, subLabel, displayLabel, pool, vocabularyTopics);
    }

    // Giữ tương thích dữ liệu cũ nếu phần khác còn dùng paired_group.
    const pairedGroups = [...new Set(pool.map(q => q.paired_group).filter(Boolean))];
    if (pairedGroups.length > 1) {
        return showPairedGroupMenu(topicNum, topicName, subLabel, displayLabel, pool, pairedGroups);
    }
    launchSubtopicQuiz(topicNum, topicName, pool, subLabel, displayLabel);
}

function showVocabularyTopicMenu(topicNum, topicName, subLabel, displayLabel, pool, vocabularyTopics) {
    pendingPairedGroupContext = { topicNum, topicName, subLabel, displayLabel, pool, pairedGroups: vocabularyTopics, useContentTopic: true };

    document.getElementById('lecture-title').textContent = displayLabel;
    const introText = `Chọn 1 trong ${vocabularyTopics.length} chủ đề từ vựng để bắt đầu luyện "${displayLabel}" nhé!`;
    document.getElementById('lecture-content').textContent = introText;
    document.getElementById('view-lecture').dataset.audioText = introText;

    let html = '';
    vocabularyTopics.forEach((pg, i) => {
        const style = SUBTOPIC_PALETTES[i % SUBTOPIC_PALETTES.length];
        const count = pool.filter(q => q.content_topic === pg).length;
        html += `
            <button onclick="selectPairedGroup(${i})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${i + 1}.</strong> ${escapeHtml(pg)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    document.getElementById('lecture-subtopics-list').innerHTML = html;
    setSubtopicGridColumns(vocabularyTopics.length);

    document.getElementById('wrap-mix-all-subtopics').classList.remove('hidden');
    document.getElementById('btn-mix-all-subtopics').setAttribute('onclick', 'selectPairedGroup(null)');

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '📚', displayLabel);
    switchAppView('view-lecture');
}

function showPairedGroupMenu(topicNum, topicName, subLabel, displayLabel, pool, pairedGroups) {
    pendingPairedGroupContext = { topicNum, topicName, subLabel, displayLabel, pool, pairedGroups, useContentTopic: false };

    document.getElementById('lecture-title').textContent = displayLabel;
    const introText = `Chọn 1 trong ${pairedGroups.length} Nhóm Kép để bắt đầu luyện "${displayLabel}" nhé!`;
    document.getElementById('lecture-content').textContent = introText;
    document.getElementById('view-lecture').dataset.audioText = introText;

    let html = '';
    pairedGroups.forEach((pg, i) => {
        const style = SUBTOPIC_PALETTES[i % SUBTOPIC_PALETTES.length];
        const count = pool.filter(q => q.paired_group === pg).length;
        html += `
            <button onclick="selectPairedGroup(${i})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${i + 1}.</strong> ${escapeHtml(pg)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    document.getElementById('lecture-subtopics-list').innerHTML = html;
    setSubtopicGridColumns(pairedGroups.length);

    document.getElementById('wrap-mix-all-subtopics').classList.remove('hidden');
    document.getElementById('btn-mix-all-subtopics').setAttribute('onclick', 'selectPairedGroup(null)');

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel);
    switchAppView('view-lecture');
}

function selectPairedGroup(i) {
    stopSpeaking();
    if (!pendingPairedGroupContext) return;
    const { topicNum, topicName, subLabel, displayLabel, pool, pairedGroups, useContentTopic } = pendingPairedGroupContext;
    const chosenPool = (i === null)
        ? pool
        : pool.filter(q => useContentTopic ? q.content_topic === pairedGroups[i] : q.paired_group === pairedGroups[i]);
    const finalLabel = (i === null) ? displayLabel : `${displayLabel} - ${pairedGroups[i]}`;
    launchSubtopicQuiz(topicNum, topicName, chosenPool, subLabel, finalLabel);
}

function launchSubtopicQuiz(topicNum, topicName, pool, subLabel, displayLabel) {
    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;
    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    stopSpeaking();
    if (!requirePremiumAccess('Bản đồ tuần')) return;
    inAlphaIpaFlow = false;
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= TOTAL_ROADMAP_WEEKS; w++) {
        const item = roadmapConfig[w];
        const coord = getRoadmapCoord(w);
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#ec4899" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f43f5e" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 32}" text-anchor="middle" font-size="12" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 32}" text-anchor="middle" font-size="10" font-weight="900" fill="#ec4899">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 30}" text-anchor="middle" font-size="11" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <circle cx="${coord.x}" cy="${coord.y}" r="32" fill="#ffffff" stroke="${strokeColor}" stroke-width="3" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="26" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 3}" text-anchor="middle" font-size="20">${item.icon || '🔢'}</text>
                <text x="${coord.x}" y="${coord.y + 13}" text-anchor="middle" font-size="11" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const pathD = buildRoadmapPathD(TOTAL_ROADMAP_WEEKS);
    const svgHtml = `
        <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" fill="none" stroke="#fbcfe8" stroke-width="9" stroke-dasharray="11,11" stroke-linecap="round"/>
            <path d="${pathD}" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="11,11" stroke-linecap="round"/>
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return alert(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: String(weekNum), chuDe: config.name, isReview15: !!(config.isGrandReview || config.isReview15) };
    pendingTopicQuiz = null; activeExamContext = null;
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    const isReviewMode = !!(config.isGrandReview || config.isReview15);
    showLoadingOverlay(isReviewMode ? `Đang chuẩn bị đề ôn tổng hợp 15 câu Tuần ${weekNum}...` : `Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchAllTopicsData();
        hideLoadingOverlay();

        const weekQuestions = isReviewMode ? generateReview15(weekNum) : getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return alert('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

// Trích ký tự Emoji ĐẦU TIÊN xuất hiện trong 1 chuỗi văn bản (VD trong question_text) —
// dùng làm ảnh minh hoạ dự phòng khi ảnh thật (image_url) chưa có hoặc bị lỗi link.
function extractFirstEmoji(text) {
    if (!text) return null;
    const match = String(text).match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u);
    return match ? match[0] : null;
}

// Từ điển tra Emoji theo NGHĨA TIẾNG VIỆT trong ngoặc — dùng khi câu hỏi/đáp án/lựa chọn không tự
// mang sẵn Emoji nào (VD các câu Phonics/Remove Letter/Fill Missing chỉ ghi "'bike' (xe đạp)" suông).
// Tra theo nghĩa tiếng Việt đáng tin cậy hơn tra theo từ tiếng Anh, vì từ tiếng Anh trong các câu
// Remove Letter/Fill Missing thường bị cố tình viết sai chính tả (đúng bản chất bài luyện).
const VOCAB_EMOJI_MAP = {
    'bàn học': '🪑', 'bàn tay': '✋', 'bé gái': '👧', 'bút chì': '✏️', 'bút mực': '🖊️',
    'bạn ba': '👦', 'bạn bill': '👦', 'bạn lucy': '👧', 'chiếc lá': '🍃', 'con chuột': '🐭',
    'con cá': '🐟', 'con dê': '🐐', 'con gà': '🐔', 'con hổ': '🐯', 'con ngựa': '🐴',
    'con quay': '🪀', 'con rùa': '🐢', 'cái chuông': '🔔', 'cái chổi lau nhà': '🧹',
    'cái cốc': '🥤', 'cái khóa': '🔒', 'cái lon': '🥫', 'cái mũ': '👒', 'cái nồi': '🍲',
    'cái đầu': '👤', 'cặp sách': '🎒', 'cổng': '🚪', 'cửa ra vào': '🚪', 'gấu bông': '🧸',
    'hạt khô': '🥜', 'hồ nước': '🏞️', 'khoai tây chiên': '🍟', 'khu vườn': '🌳', 'mì sợi': '🍜',
    'mẹ': '👩', 'con chó': '🐶', 'con vịt': '🦆', 'quyển sách': '📖', 'quả táo': '🍎',
    'tóc': '👱', 'xe đạp': '🚲', 'ô tô': '🚗', 'quả chanh': '🍋', 'quả chuối': '🍌',
    'quả xoài': '🥭', 'xe tải': '🚚', 'ông mặt trời': '☀️', 'đồng hồ': '⏰'
};
function lookupVocabEmoji(text) {
    if (!text) return null;
    const m = String(text).match(/\(([^)]+)\)/);
    if (!m) return null;
    let gloss = m[1].trim().toLowerCase().replace(/^nghĩa là:\s*/i, '').trim();
    gloss = gloss.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').trim();
    return VOCAB_EMOJI_MAP[gloss] || null;
}

    let mediaHtml = '';
    if (!activeExamContext) {
        // Ưu tiên 1: ảnh thật từ kho học liệu (image_url/img) — nếu link lỗi/chưa có file,
        // tự động rớt xuống dùng Emoji thay thế theo thứ tự: field "emoji" riêng → Emoji có sẵn
        // trong câu hỏi → trong đáp án đúng → trong các lựa chọn khác → tra theo nghĩa tiếng Việt
        // trong ngoặc. Nếu câu hỏi thuần ngữ pháp/câu ghép không có từ vựng cụ thể nào để minh hoạ
        // (không tra ra Emoji nào hợp lý) thì ẨN HẲN khung ảnh, không hiện icon mặc định vô nghĩa.
        const fallbackEmoji = q.emoji
            || extractFirstEmoji(q.question_text)
            || extractFirstEmoji(q.answer)
            || (q.options || []).map(extractFirstEmoji).find(Boolean)
            || lookupVocabEmoji(q.question_text);
        const fallbackEmojiHtml = fallbackEmoji ? `<div class="text-4xl md:text-5xl floating">${fallbackEmoji}</div>` : '';
        if (q.image_url) {
            // fallbackEmojiHtml sẽ được nhúng làm giá trị thuộc tính onerror="..." (delimiter nháy kép) —
            // nên phải escape dấu nháy kép bên trong thành &quot; để không làm vỡ cấu trúc thẻ <img>,
            // trình duyệt sẽ tự giải mã lại &quot; -> " trước khi thực thi đoạn JS trong onerror.
            const fallbackForOnerror = fallbackEmojiHtml
                ? fallbackEmojiHtml.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;')
                : ''; // Không tra ra Emoji hợp lý -> ảnh lỗi thì biến mất hẳn, không để lại icon sai.
            mediaHtml = `<div class="w-20 h-20 md:w-24 md:h-24 mb-1 flex items-center justify-center">
                <img src="${escapeHtml(q.image_url)}" alt="" class="w-full h-full object-contain drop-shadow-sm floating"
                     onerror="this.onerror=null; this.outerHTML='${fallbackForOnerror}';">
            </div>`;
        } else if (fallbackEmoji) {
            mediaHtml = `<div class="w-14 h-14 md:w-16 md:h-16 mb-1 flex items-center justify-center">${fallbackEmojiHtml}</div>`;
        }
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-rose-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐰</span>
                    <span class="text-xs md:text-sm font-extrabold text-rose-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        // Chỉ hiện phiên âm khi JSON thật sự có field "options_ipa" (mảng cùng thứ tự với "options") —
        // không tự bịa phiên âm để tránh sai, chờ dữ liệu thật bổ sung.
        const ipaText = q.options_ipa && q.options_ipa[idx] ? q.options_ipa[idx] : '';
        const ipaHtml = ipaText ? `<span class="text-sm md:text-base text-gray-500 font-semibold ml-1.5 whitespace-nowrap">/${escapeHtml(ipaText.replace(/^\/|\/$/g, ''))}/</span>` : '';

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}${ipaHtml}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span class="opt-text"><strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}${ipaHtml}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
        if (completedAnswer === q.answer) showVocabularyMeaningForOption(q.answer);
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

// Sau khi bé đã trả lời xong 1 câu (không phải Đề thi), các nút đáp án KHÔNG bị disable cứng nữa —
// thay vào đó khoá việc chấm điểm lần 2 (cờ answeredLocked) nhưng vẫn cho bé BẤM LẠI từng đáp án
// để nghe đọc to chính từ đó. Mục đích: mỗi câu có 4 từ, bé được luyện nghe cả 4, không chỉ đáp án đúng.
function enableReplayOnOptions() {
    document.querySelectorAll('.option-btn').forEach(b => {
        b.disabled = false; // vẫn cho click, nhưng checkAnswer sẽ tự chặn chấm điểm lại nhờ cờ khoá
        b.style.cursor = 'pointer';
        b.setAttribute('title', 'Bấm để nghe lại từ này');
    });
}

// Đọc to 1 đáp án cụ thể khi bé bấm lại (sau khi câu đã được trả lời). Đọc bằng giọng Anh vì đây
// là từ vựng tiếng Anh; giữ nguyên chữ gốc, bỏ các Emoji minh hoạ đính kèm để TTS không đọc nhịu.
function replaySpeakOption(optText) {
    // Bỏ cụm biểu tượng minh hoạ ở CUỐI đáp án (emoji, và emoji-số dạng "1️⃣" = số + U+FE0F + U+20E3)
    // để TTS đọc gọn phần chữ; không đụng tới số/chữ nằm giữa nội dung.
    const clean = String(optText)
        .replace(/[\u{0030}-\u{0039}]?[\u{FE0F}]?[\u{20E3}]/gu, '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{FE0F}]/gu, '')
        .trim();
    if (clean) speakEnglish(clean);
}

// Hiện nghĩa tiếng Việt ngay sau IPA theo đúng cách TA2 đang làm.
// Chỉ áp dụng cho chuyên mục Vocabulary (2.x). Nghĩa lấy từ chính 2 JSON, không tự dịch.
// Nếu một từ có nhiều nghĩa tiếng Việt trong kho dữ liệu, hiển thị toàn bộ, ngăn cách bằng " / ".
function showVocabularyMeaningForOption(optText) {
    const q = activeQuestionsList[currentQIndex];
    if (!q || !String(q.sub_topic || '').startsWith('2.')) return;

    const key = normalizeVocabWordKey(optText);
    const meanings = wordMeaningMapCache[key] || [];
    if (!meanings.length) return;

    document.querySelectorAll('.option-btn').forEach(b => {
        if (b.getAttribute('data-opt') !== optText) return;
        const textSpan = b.querySelector('.opt-text');
        if (!textSpan) return;

        let meaningSpan = textSpan.querySelector('.opt-meaning');
        if (!meaningSpan) {
            meaningSpan = document.createElement('span');
            meaningSpan.className = 'opt-meaning text-xs md:text-sm font-bold text-purple-500 ml-1.5 italic';
            textSpan.appendChild(meaningSpan);
        }
        meaningSpan.textContent = `(${meanings.join(' / ')})`;
    });
}

function speakOptionWithMeaning(optText) {
    replaySpeakOption(optText);
    showVocabularyMeaningForOption(optText);
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        // Đã trả lời rồi -> lần bấm sau chỉ để NGHE LẠI từ đó, không chấm điểm lại.
        if (userAnswers[currentQIndex] !== undefined) { speakOptionWithMeaning(selectedOpt); return; }

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        enableReplayOnOptions();

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakOptionWithMeaning(q.answer), 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    // Đã trả lời đúng rồi -> lần bấm sau chỉ để NGHE LẠI từ đó (học đủ cả 4 từ), không chấm lại.
    if (userAnswers[currentQIndex] !== undefined) { speakOptionWithMeaning(selectedOpt); return; }

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });
        enableReplayOnOptions();

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
        setTimeout(() => speakOptionWithMeaning(q.answer), 180);
    } else {
        // Bé đã bấm từ sai này trước đó rồi -> lần bấm sau chỉ NGHE LẠI, không trừ sao thêm lần nữa.
        if (wrongAttemptsByQ[currentQIndex] && wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            speakOptionWithMeaning(selectedOpt);
            return;
        }
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        wrongAttemptsByQ[currentQIndex].push(selectedOpt);
        starRedCount++;
        document.getElementById('star-red-count').textContent = starRedCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                // KHÔNG disable cứng — để bé vẫn bấm lại nghe được từ này (nhánh replay ở trên xử lý).
                b.setAttribute('title', 'Bấm để nghe lại từ này');
            }
        });

        playAudio('wrong');
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            alert(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô giáo Thỏ Hồng sẽ xáo trộn ngẫu nhiên để con bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    if (confirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`)) {
        showResultScreen();
    }
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Tiến trình tuần thường: điểm tính đều tay 10/tổng số câu (không trọng số).
    // Riêng đề ôn 15 câu (Tuần 12/17): mỗi câu có trọng số điểm thật khác nhau, phải dùng đúng "score" thực tế.
    const displayScore = (activeRoadmapContext && !activeRoadmapContext.isReview15)
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại tiến trình tuần' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThiHK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = SKILL_KEYS;
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let tag = String(q.skill_tag || 'ENG_VOC').toUpperCase();
        if (!skillKeys.includes(tag)) tag = 'ENG_VOC';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-rose-50/40 border border-rose-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-rose-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';

    const skillScores = {}; SKILL_KEYS.forEach(k => skillScores[k] = 0);
    quizAnsweredLog.forEach(item => {
        let tag = String(item.skill_tag || 'ENG_VOC').toUpperCase();
        if (!SKILL_KEYS.includes(tag)) tag = 'ENG_VOC';
        if (item.isCorrect) skillScores[tag] += (item.diem || 0.5);
    });

    const payload = {
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThiHK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột "diem" + mã kỹ năng (diemENG_PHO, diemENG_VOC...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    SKILL_KEYS.forEach(k => { payload['diem' + k] = skillScores[k].toFixed(1); });
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (ENG_PHO-READ) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = {}; const skillTotal = {};
    SKILL_KEYS.forEach(k => { skillCorrect[k] = 0; skillTotal[k] = 0; });
    quizAnsweredLog.forEach(item => {
        let tag = String(item.skill_tag || 'ENG_VOC').toUpperCase();
        if (!SKILL_KEYS.includes(tag)) tag = 'ENG_VOC';
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= TOTAL_ROADMAP_WEEKS) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return alert('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!');
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = currentUser.ngaySinh || '03/09/2019';
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình 24 tuần học tập",
        LichSuBaiThiHK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThiHK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThiHSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName });
        hideLoadingOverlay();
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(254, 226, 226, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = SKILL_KEYS;
    const skillAverages = { ENG_PHO: 0, ENG_VOC: 0, ENG_LIS: 0, ENG_GRA: 0, ENG_SYN: 0, ENG_READ: 0 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        // Điểm tối đa mỗi nhóm năng lực trên 1 đề thi chuẩn (đúng Ma trận đề thi V2, 13 câu/10đ)
        const MAX_SKILL_POINTS = { ENG_PHO: 1.5, ENG_VOC: 1.0, ENG_LIS: 1.5, ENG_GRA: 2.0, ENG_SYN: 2.0, ENG_READ: 2.0 };
        skillKeys.forEach((k) => {
            const maxPts = MAX_SKILL_POINTS[k] || 1.5;
            const vals = rows.map(r => {
                const val = r[`diem${k}`];
                return (val !== undefined && val !== null && val !== '--' && val !== '') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            if (vals.length > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * maxPts)) * 100));
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(251, 207, 232, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại từ vựng, đặt câu hỏi gợi mở bằng tiếng Anh đơn giản và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích tiếng Anh nhé!</p>
        </div>
    `;

    // Lưu lại bản văn bản thuần (không thẻ HTML) của toàn bộ 4 phần nhận xét — dùng để đọc to
    // qua nút "Nghe cô giáo đọc" (dùng chung cho cả Tiến trình tuần lẫn Đề thi vì cùng 1 khung này).
    pedagogicalEvaluationText = box.textContent.replace(/\s+/g, ' ').trim();
}

function speakPedagogicalEvaluation() {
    if (!pedagogicalEvaluationText) return;
    speakVietnamese(pedagogicalEvaluationText);
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = SKILL_KEYS;

    const getScoreVal = (r, skillKey) => {
        const val = r['diem' + skillKey];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, k), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, k)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-rose-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    speakGoogleTTS(text, 'vi', rate);
}

function speakEnglish(text, rate = 0.92) {
    if (!text) return;
    speakGoogleTTS(text, 'en', rate);
}

function speakGoogleTTS(text, lang, rate) {
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;
        const tl = lang === 'en' ? 'en' : 'vi';

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tl}&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tl}&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    // Nội dung tiếng Anh thật (câu nghe, đoạn văn đọc hiểu) đọc bằng giọng Anh;
    // phần hướng dẫn/câu hỏi tiếng Việt đọc bằng giọng Việt.
    if (q.audio_text) return speakEnglish(q.audio_text);
    if (q.reading_passage) return speakEnglish(q.reading_passage);
    speakVietnamese(q.question_text, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
});

// TRUNG TÂM MINI GAME (12 game, lưới 3x4)
// ==========================================
// ==========================================
// THEME DÙNG CHUNG CHO TOÀN BỘ MINI GAME
// Giữ ngôn ngữ thiết kế của phần Học: card pastel, 2 cột, badge số lượng,
// màu sắc luân phiên theo từng game để vui mắt nhưng vẫn đồng bộ toàn app.
// ==========================================
const MINIGAME_TOPIC_PALETTES = SUBTOPIC_PALETTES;

function miniGameHash(text = '') {
    return [...String(text)].reduce((acc, ch) => ((acc * 31) + ch.charCodeAt(0)) >>> 0, 7);
}

function getMiniGamePaletteOrder(seed = 'minigame') {
    const order = MINIGAME_TOPIC_PALETTES.map((_, i) => i);
    let state = miniGameHash(seed) || 1;
    for (let i = order.length - 1; i > 0; i--) {
        state = (state * 1664525 + 1013904223) >>> 0;
        const j = state % (i + 1);
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order.map(i => MINIGAME_TOPIC_PALETTES[i]);
}

function getMiniGameTopicName(topicId) {
    if (topicId === null || topicId === undefined || topicId === 'all') return 'Trộn tất cả các nhóm';
    const g = getMiniGameTopicGroups().find(x => Number(x.id) === Number(topicId));
    return g ? `${g.id}. ${g.name}` : `Nhóm ${topicId}`;
}

function renderMiniGameTopicMenu({
    gameKey,
    onChoose,
    subtitle = 'Chọn 1 trong 6 Nhóm từ vựng để bắt đầu chơi nhé!',
    countFilter = null,
    mixLabel = 'Trộn tất cả các nhóm'
}) {
    const groups = getMiniGameTopicGroups();
    const palettes = getMiniGamePaletteOrder(gameKey || 'minigame');
    const countFor = (topicId) => {
        let pool = getMiniGameVocabPool({ topicId });
        if (typeof countFilter === 'function') pool = pool.filter(countFilter);
        return pool.length;
    };
    const total = countFor('all');
    return `
        <div class="mg-topic-menu w-full max-w-4xl mx-auto">
            <div class="w-full bg-pink-50/35 border-2 border-pink-100 rounded-2xl px-4 py-4 md:py-5 text-center mb-3">
                <p class="text-base md:text-lg text-gray-700 font-bold leading-relaxed">${escapeHtml(subtitle)}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                ${groups.map((g, idx) => {
                    const style = palettes[idx % palettes.length];
                    return `
                        <button onclick="${onChoose}(${g.id})" class="mg-topic-card p-3.5 md:p-4 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn min-h-[76px]">
                            <span class="text-base md:text-[17px] leading-snug pr-2"><strong class="${style.num} mr-1.5">${g.id}.</strong>${escapeHtml(g.name)}</span>
                            <span class="text-sm font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${countFor(g.id)} từ</span>
                        </button>`;
                }).join('')}
            </div>
            <div class="mt-3 flex justify-center">
                <button onclick="${onChoose}('all')" class="mg-mix-btn pastel-btn inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm md:text-base shadow-md border border-purple-300">
                    <span>🌟 ${escapeHtml(mixLabel)}</span>
                    <span class="text-xs md:text-sm font-black bg-white/20 px-2 py-0.5 rounded-full">${total} từ</span>
                </button>
            </div>
        </div>`;
}

function ensureMiniGameThemeStyles() {
    if (document.getElementById('minigame-theme-v3')) return;
    const style = document.createElement('style');
    style.id = 'minigame-theme-v3';
    style.textContent = `
        #view-game-play > div { max-width: 56rem !important; }
        #game-play-title { font-size: 1.2rem !important; }
        #game-play-container { font-size: 16px; }
        #game-play-container .text-\\[10px\\] { font-size: 12px !important; }
        #game-play-container .text-\\[11px\\] { font-size: 13px !important; }
        #game-play-container .text-xs { font-size: 14px !important; }
        #game-play-container .mg-topic-card { min-height: 78px; }
        #game-play-container .mg-topic-card:hover { transform: translateY(-2px); }
        #game-play-container .mg-mix-btn { min-width: 250px; }
        @media (max-width: 640px) {
            #view-game-play > div { max-width: 100% !important; }
            #game-play-title { font-size: 1.05rem !important; }
            #game-play-container .mg-mix-btn { min-width: 0; width: auto; }
        }
    `;
    document.head.appendChild(style);
}

const MINIGAME_LIST = [
    { id: 'word-search', title: '1. Word Search', desc: 'Tìm từ giấu trong ô chữ', icon: '🔍', ready: true },
    { id: 'word-scramble', title: '2. Word Scramble', desc: 'Sắp xếp chữ cái thành từ', icon: '🔤', ready: true },
    { id: 'bingo', title: '3. Bingo', desc: 'Nghe và tìm đúng từ trên bảng', icon: '🎲', ready: true },
    { id: 'fishing-game', title: '4. Fishing Game', desc: 'Câu đúng con cá mang từ', icon: '🎣', ready: true },
    { id: 'sentence-train', title: '5. Sentence Train', desc: 'Xếp toa từ thành câu đúng', icon: '🚂', ready: true },
    { id: 'grammar-river', title: '6. Grammar River', desc: 'Nhảy qua đúng giới từ', icon: '🐸', ready: true },
    { id: 'qa-bridge', title: '7. Q&A Bridge', desc: 'Ghép đúng câu hỏi - trả lời', icon: '🌉', ready: true },
    { id: 'sentence-doctor', title: '8. Sentence Doctor', desc: 'Tìm và chữa lỗi ngữ pháp', icon: '🩺', ready: true },
    { id: 'action-race', title: '9. Action Race', desc: 'Đua xe cùng động từ hành động', icon: '🏎️', ready: true },
    { id: 'feeling-detective', title: '10. Feeling Detective', desc: 'Truy tìm tính từ và trạng thái', icon: '🕵️', ready: true },
    { id: 'a-or-an-factory', title: '11. A or An Factory', desc: 'Phân loại mạo từ a / an', icon: '🏭', ready: true },
    { id: 'teacher-says', title: '12. Teacher Says', desc: 'Phản xạ với câu mệnh lệnh', icon: '🤖', ready: true }
];

function openMiniGameHub() {
    stopSpeaking();
    if (!requirePremiumAccess('Mini Game')) return;
    inAlphaIpaFlow = false;
    inMiniGameFlow = true;
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs("Mini Game", "🎮", null);

    ensureMiniGameThemeStyles();
    const grid = document.getElementById('minigame-grid');
    grid.innerHTML = MINIGAME_LIST.map((g, idx) => {
        const style = getMiniGamePaletteOrder('hub')[idx % MINIGAME_TOPIC_PALETTES.length];
        return `
        <div onclick="openGamePlay('${g.id}')" class="p-3.5 md:p-4 flex flex-col items-center text-center cursor-pointer transition-all group ${style.card} border-2 rounded-[26px] min-h-[132px] justify-between relative shadow-sm pastel-btn">
            ${!g.ready ? `<span class="absolute top-2 right-2 bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-200">Sắp ra mắt</span>` : ''}
            <div class="text-4xl group-hover:scale-110 transition-transform mt-1">${g.icon}</div>
            <div class="w-full">
                <h3 class="font-extrabold ${style.num} text-base leading-tight">${g.title}</h3>
                <p class="text-sm text-gray-700 font-bold mt-1 w-full leading-snug">${g.desc}</p>
            </div>
        </div>`;
    }).join('');

    switchAppView('view-minigame-hub');
}

// Đường dẫn file JS riêng của từng game — chỉ tải về máy khi bé THẬT SỰ bấm vào game đó,
// không bắt tải sẵn hết 12 game ngay từ đầu (giữ app.js gọn nhẹ dù sau này thêm bao nhiêu game).
const GAME_SCRIPT_MAP = {
    'word-search': 'assets/js/games/word-search.js?v=mg4',
    'word-scramble': 'assets/js/games/word-scramble.js?v=mg4',
    'bingo': 'assets/js/games/bingo.js?v=mg4',
    'fishing-game': 'assets/js/games/fishing-game.js?v=mg4',
    'sentence-train': 'assets/js/games/sentence-train.js?v=mg5',
    'grammar-river': 'assets/js/games/grammar-river.js?v=mg6',
    'qa-bridge': 'assets/js/games/qa-bridge.js?v=mg7',
    'sentence-doctor': 'assets/js/games/sentence-doctor.js?v=mg8',
    'action-race': 'assets/js/games/action-race.js?v=mg9',
    'feeling-detective': 'assets/js/games/feeling-detective.js?v=mg10',
    'a-or-an-factory': 'assets/js/games/a-or-an-factory.js?v=mg11',
    'teacher-says': 'assets/js/games/teacher-says.js?v=mg12'
};
const loadedGameScripts = {};

function loadGameScript(src) {
    if (loadedGameScripts[src]) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { loadedGameScripts[src] = true; resolve(); };
        script.onerror = () => reject(new Error(`Không tải được file game: ${src}`));
        document.body.appendChild(script);
    });
}

async function openGamePlay(gameId) {
    stopSpeaking();
    ensureMiniGameThemeStyles();
    inMiniGameFlow = true;
    const game = MINIGAME_LIST.find(g => g.id === gameId);
    if (!game) return;

    if (!game.ready) {
        alert(`Game "${game.title}" đang được xây dựng, sắp ra mắt sớm nhé! Con quay lại sau nha!`);
        return;
    }

    document.getElementById('game-play-title').innerHTML = `<span>${game.icon}</span><span>${game.title}</span>`;
    updateNavTabs("Mini Game", "🎮", game.title);
    switchAppView('view-game-play');

    const scriptSrc = GAME_SCRIPT_MAP[gameId];
    if (scriptSrc) {
        document.getElementById('game-play-container').innerHTML = `<p class="text-center text-gray-400 font-bold py-8">Đang tải game...</p>`;
        try {
            await loadGameScript(scriptSrc);
        } catch (e) {
            document.getElementById('game-play-container').innerHTML = `<p class="text-center text-rose-500 font-bold py-8">Không tải được game, bé thử lại nhé!</p>`;
            return;
        }
    }

    if (gameId === 'word-search') startWordSearchGame();
    if (gameId === 'word-scramble') startWordScrambleGame();
    if (gameId === 'bingo') startBingoGame();
    if (gameId === 'fishing-game') startFishingGame();
    if (gameId === 'sentence-train') startSentenceTrainGame();
    if (gameId === 'grammar-river') startGrammarRiverGame();
    if (gameId === 'qa-bridge') startQABridgeGame();
    if (gameId === 'sentence-doctor') startSentenceDoctorGame();
    if (gameId === 'action-race') startActionRaceGame();
    if (gameId === 'feeling-detective') startFeelingDetectiveGame();
    if (gameId === 'a-or-an-factory') startAOrAnFactoryGame();
    if (gameId === 'teacher-says') startTeacherSaysGame();
}

/** Lấy nguồn từ vựng thật của chương trình (kho tra nghĩa xây từ Flashcards Library) —
 * chỉ lấy từ ĐƠN (không dấu cách/gạch nối), độ dài 3-7 ký tự để vừa vặn lưới ô chữ. */
function getWordSearchVocabPool(topicId = 'all') {
    return getMiniGameVocabPool({ topicId, singleWordOnly: true, minLength: 3, maxLength: 7 })
        .map(item => ({ w: item.word.toUpperCase(), vi: item.vietnamese }));
}

tryAutoLogin();