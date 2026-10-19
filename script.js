
/* =====================================================
   DUNIA CERIA
   File: script.js
   JavaScript untuk permainan edukasi anak usia 4–8 tahun
   ===================================================== */

"use strict";

/* =====================================================
   1. DATA PERMAINAN
   ===================================================== */

const GAME_DATA = {
    hewan: [
        {
            question: "Hewan apa yang berbunyi 'meong'?",
            image: "🐱",
            options: ["Kucing", "Ayam", "Sapi", "Bebek"],
            answer: "Kucing",
            hint: "Hewan ini suka menangkap tikus."
        },
        {
            question: "Hewan apa yang memiliki belalai?",
            image: "🐘",
            options: ["Kuda", "Gajah", "Kelinci", "Kucing"],
            answer: "Gajah",
            hint: "Hewan ini memiliki tubuh besar dan telinga lebar."
        },
        {
            question: "Hewan apa yang menghasilkan susu?",
            image: "🐄",
            options: ["Singa", "Sapi", "Ikan", "Ayam"],
            answer: "Sapi",
            hint: "Hewan ini sering kita lihat di peternakan."
        },
        {
            question: "Hewan apa yang bisa terbang dan memiliki sayap?",
            image: "🦋",
            options: ["Ikan", "Kambing", "Kupu-kupu", "Kucing"],
            answer: "Kupu-kupu",
            hint: "Hewan ini memiliki sayap yang indah dan berwarna-warni."
        },
        {
            question: "Hewan apa yang hidup di air dan memiliki sirip?",
            image: "🐟",
            options: ["Kelinci", "Ikan", "Ayam", "Kuda"],
            answer: "Ikan",
            hint: "Hewan ini berenang menggunakan sirip."
        },
        {
            question: "Hewan apa yang suka makan wortel?",
            image: "🐰",
            options: ["Kelinci", "Singa", "Buaya", "Bebek"],
            answer: "Kelinci",
            hint: "Hewan ini memiliki telinga panjang."
        },
        {
            question: "Hewan apa yang berkokok pada pagi hari?",
            image: "🐓",
            options: ["Kucing", "Ayam jantan", "Sapi", "Ikan"],
            answer: "Ayam jantan",
            hint: "Hewan ini sering dipelihara di halaman rumah."
        },
        {
            question: "Hewan apa yang memiliki leher panjang?",
            image: "🦒",
            options: ["Gajah", "Jerapah", "Kuda", "Kambing"],
            answer: "Jerapah",
            hint: "Hewan ini dapat memakan daun dari pohon yang tinggi."
        },
        {
            question: "Hewan apa yang dikenal sebagai raja hutan?",
            image: "🦁",
            options: ["Kelinci", "Kucing", "Singa", "Bebek"],
            answer: "Singa",
            hint: "Hewan ini memiliki surai pada singa jantan."
        },
        {
            question: "Hewan apa yang berjalan sangat lambat dan membawa cangkang?",
            image: "🐌",
            options: ["Siput", "Kuda", "Ayam", "Ikan"],
            answer: "Siput",
            hint: "Hewan ini sering terlihat setelah hujan."
        }
    ],

    angka: [
        {
            question: "Berapakah hasil dari 1 + 1?",
            image: "🔢",
            options: ["1", "2", "3", "4"],
            answer: "2",
            hint: "Mulai dari angka satu, lalu maju satu langkah."
        },
        {
            question: "Angka berapakah setelah 4?",
            image: "4️⃣",
            options: ["3", "5", "6", "2"],
            answer: "5",
            hint: "Urutannya adalah 3, 4, lalu angka berikutnya."
        },
        {
            question: "Berapakah hasil dari 2 + 3?",
            image: "🧮",
            options: ["4", "5", "6", "7"],
            answer: "5",
            hint: "Hitung dua benda, lalu tambahkan tiga benda."
        },
        {
            question: "Berapakah hasil dari 5 - 2?",
            image: "➖",
            options: ["2", "3", "4", "5"],
            answer: "3",
            hint: "Dari lima benda, ambil dua benda."
        },
        {
            question: "Ada berapa jari pada satu tangan?",
            image: "🖐️",
            options: ["3", "4", "5", "6"],
            answer: "5",
            hint: "Coba hitung semua jari pada satu tangan."
        },
        {
            question: "Angka manakah yang paling kecil?",
            image: "🔢",
            options: ["7", "2", "9", "5"],
            answer: "2",
            hint: "Pilih angka dengan nilai paling sedikit."
        },
        {
            question: "Berapakah hasil dari 3 + 3?",
            image: "➕",
            options: ["5", "6", "7", "8"],
            answer: "6",
            hint: "Tiga ditambah tiga sama dengan enam."
        },
        {
            question: "Angka berapakah sebelum 10?",
            image: "🔟",
            options: ["8", "9", "11", "7"],
            answer: "9",
            hint: "Angka ini berada tepat sebelum sepuluh."
        },
        {
            question: "Berapakah hasil dari 4 + 2?",
            image: "🧮",
            options: ["5", "6", "7", "8"],
            answer: "6",
            hint: "Mulai dari empat, lalu maju dua angka."
        },
        {
            question: "Ada 3 apel dan ditambah 1 apel. Berapa semuanya?",
            image: "🍎",
            options: ["3", "4", "5", "6"],
            answer: "4",
            hint: "Tiga apel ditambah satu apel."
        }
    ],

    buah: [
        {
            question: "Buah apa yang biasanya berwarna kuning dan panjang?",
            image: "🍌",
            options: ["Pisang", "Anggur", "Semangka", "Stroberi"],
            answer: "Pisang",
            hint: "Buah ini mudah dikupas."
        },
        {
            question: "Buah apa yang bagian dalamnya berwarna merah dan memiliki biji?",
            image: "🍉",
            options: ["Kelapa", "Semangka", "Pisang", "Lemon"],
            answer: "Semangka",
            hint: "Buah ini besar dan memiliki banyak air."
        },
        {
            question: "Buah apa yang sering berwarna merah atau hijau?",
            image: "🍎",
            options: ["Apel", "Nanas", "Pisang", "Kelapa"],
            answer: "Apel",
            hint: "Buah ini sering menjadi bekal sekolah."
        },
        {
            question: "Buah apa yang memiliki kulit berduri?",
            image: "🍍",
            options: ["Jeruk", "Anggur", "Nanas", "Apel"],
            answer: "Nanas",
            hint: "Buah ini memiliki mahkota daun di atasnya."
        },
        {
            question: "Buah apa yang kecil dan tumbuh bergerombol?",
            image: "🍇",
            options: ["Anggur", "Semangka", "Kelapa", "Pepaya"],
            answer: "Anggur",
            hint: "Buah ini sering berwarna ungu atau hijau."
        },
        {
            question: "Buah apa yang memiliki air di dalamnya?",
            image: "🥥",
            options: ["Kelapa", "Stroberi", "Anggur", "Apel"],
            answer: "Kelapa",
            hint: "Airnya sering diminum saat cuaca panas."
        },
        {
            question: "Buah apa yang berwarna oranye dan kaya vitamin C?",
            image: "🍊",
            options: ["Jeruk", "Pisang", "Kelapa", "Anggur"],
            answer: "Jeruk",
            hint: "Buah ini memiliki rasa manis atau asam."
        },
        {
            question: "Buah apa yang memiliki biji kecil di bagian luar?",
            image: "🍓",
            options: ["Mangga", "Stroberi", "Pepaya", "Nanas"],
            answer: "Stroberi",
            hint: "Buah ini berwarna merah dan berbentuk hati."
        },
        {
            question: "Buah apa yang memiliki daging berwarna oranye dan banyak biji hitam?",
            image: "🍈",
            options: ["Pepaya", "Apel", "Pisang", "Anggur"],
            answer: "Pepaya",
            hint: "Buah ini sering dimakan saat sudah matang."
        },
        {
            question: "Buah apa yang memiliki rasa asam dan sering digunakan untuk minuman?",
            image: "🍋",
            options: ["Lemon", "Pisang", "Kelapa", "Mangga"],
            answer: "Lemon",
            hint: "Buah ini biasanya berwarna kuning."
        }
    ],

    warna: [
        {
            question: "Apa warna daun yang sehat?",
            image: "🍃",
            options: ["Merah", "Hijau", "Ungu", "Hitam"],
            answer: "Hijau",
            hint: "Warna ini juga terlihat pada rumput."
        },
        {
            question: "Apa warna matahari pada gambar anak-anak?",
            image: "☀️",
            options: ["Biru", "Hijau", "Kuning", "Ungu"],
            answer: "Kuning",
            hint: "Warna ini mirip warna buah pisang matang."
        },
        {
            question: "Apa warna langit cerah pada siang hari?",
            image: "☁️",
            options: ["Biru", "Merah", "Hitam", "Cokelat"],
            answer: "Biru",
            hint: "Warna ini mirip warna laut."
        },
        {
            question: "Apa warna stroberi yang sudah matang?",
            image: "🍓",
            options: ["Hijau", "Merah", "Biru", "Putih"],
            answer: "Merah",
            hint: "Warna ini juga sering digunakan untuk menggambarkan hati."
        },
        {
            question: "Apa warna susu?",
            image: "🥛",
            options: ["Hitam", "Putih", "Ungu", "Hijau"],
            answer: "Putih",
            hint: "Warna ini seperti awan yang cerah."
        },
        {
            question: "Apa warna arang?",
            image: "⚫",
            options: ["Kuning", "Merah", "Hitam", "Pink"],
            answer: "Hitam",
            hint: "Warna ini sangat gelap."
        },
        {
            question: "Apa warna wortel yang umum?",
            image: "🥕",
            options: ["Oranye", "Biru", "Ungu", "Putih"],
            answer: "Oranye",
            hint: "Warnanya mirip buah jeruk."
        },
        {
            question: "Apa warna awan putih pada hari cerah?",
            image: "☁️",
            options: ["Putih", "Hijau", "Merah", "Hitam"],
            answer: "Putih",
            hint: "Warna ini sama dengan warna susu."
        },
        {
            question: "Apa warna terong yang sering kita lihat?",
            image: "🍆",
            options: ["Ungu", "Kuning", "Biru muda", "Putih"],
            answer: "Ungu",
            hint: "Warna ini berada di antara merah dan biru pada spektrum warna."
        },
        {
            question: "Apa warna tanah pada umumnya?",
            image: "🌱",
            options: ["Cokelat", "Pink", "Biru", "Putih"],
            answer: "Cokelat",
            hint: "Warna ini mirip warna batang pohon."
        }
    ],

    kuis: [
        {
            question: "Bagian tubuh apa yang kita gunakan untuk melihat?",
            image: "👀",
            options: ["Telinga", "Mata", "Hidung", "Kaki"],
            answer: "Mata",
            hint: "Kita memiliki dua bagian tubuh ini di wajah."
        },
        {
            question: "Dengan apa kita mendengar suara?",
            image: "👂",
            options: ["Mata", "Mulut", "Telinga", "Tangan"],
            answer: "Telinga",
            hint: "Bagian tubuh ini ada di sisi kepala."
        },
        {
            question: "Apa yang kita gunakan untuk menyikat gigi?",
            image: "🪥",
            options: ["Sisir", "Sikat gigi", "Sendok", "Penggaris"],
            answer: "Sikat gigi",
            hint: "Benda ini digunakan bersama pasta gigi."
        },
        {
            question: "Kapan kita biasanya tidur pada malam hari?",
            image: "🌙",
            options: ["Saat waktunya istirahat", "Saat bermain bola", "Saat sarapan", "Saat mandi pagi"],
            answer: "Saat waktunya istirahat",
            hint: "Tubuh membutuhkan istirahat setelah beraktivitas."
        },
        {
            question: "Apa yang kita gunakan untuk menulis di buku?",
            image: "✏️",
            options: ["Piring", "Pensil", "Sepatu", "Gelas"],
            answer: "Pensil",
            hint: "Benda ini memiliki ujung untuk menulis."
        },
        {
            question: "Hewan apa yang menghasilkan madu?",
            image: "🐝",
            options: ["Lebah", "Kucing", "Kuda", "Ikan"],
            answer: "Lebah",
            hint: "Hewan kecil ini terbang dari bunga ke bunga."
        },
        {
            question: "Apa yang dibutuhkan tumbuhan untuk tumbuh?",
            image: "🌱",
            options: ["Air dan cahaya matahari", "Permen", "Sepatu", "Mainan"],
            answer: "Air dan cahaya matahari",
            hint: "Tumbuhan memerlukan air dan sinar matahari."
        },
        {
            question: "Berapa jumlah hari dalam satu minggu?",
            image: "📅",
            options: ["5 hari", "6 hari", "7 hari", "8 hari"],
            answer: "7 hari",
            hint: "Satu minggu terdiri dari Senin sampai Minggu."
        },
        {
            question: "Bentuk apakah yang memiliki tiga sisi?",
            image: "🔺",
            options: ["Lingkaran", "Segitiga", "Persegi", "Persegi panjang"],
            answer: "Segitiga",
            hint: "Bentuk ini memiliki tiga sudut."
        },
        {
            question: "Apa yang sebaiknya kita lakukan sebelum makan?",
            image: "🧼",
            options: ["Mencuci tangan", "Berlari di jalan", "Membuang makanan", "Tidak membersihkan tangan"],
            answer: "Mencuci tangan",
            hint: "Kebiasaan ini membantu menjaga kebersihan."
        }
    ]
};


/* =====================================================
   2. PENGATURAN PERMAINAN
   ===================================================== */

const GAME_SETTINGS = {
    questionsPerGame: 10,
    pointsPerCorrect: 10,
    pointsWithHint: 5,
    enableSound: true
};

let currentGame = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let correctAnswers = 0;
let hintUsed = false;
let gameFinished = false;


/* =====================================================
   3. FUNGSI BANTU
   ===================================================== */

// Mengacak susunan data.
function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Memilih sejumlah soal secara acak.
function selectQuestions(questions, count) {
    return shuffleArray(questions).slice(
        0,
        Math.min(count, questions.length)
    );
}

// Mengambil elemen berdasarkan ID.
function getElement(id) {
    return document.getElementById(id);
}

// Menampilkan teks dengan aman.
function setText(id, text) {
    const element = getElement(id);

    if (element) {
        element.textContent = text;
    }
}

// Mengubah tampilan elemen.
function showElement(id) {
    const element = getElement(id);

    if (element) {
        element.classList.remove("hidden");
        element.hidden = false;
    }
}

function hideElement(id) {
    const element = getElement(id);

    if (element) {
        element.classList.add("hidden");
        element.hidden = true;
    }
}

// Membuat tombol dinonaktifkan atau diaktifkan.
function setButtonDisabled(id, disabled) {
    const button = getElement(id);

    if (button) {
        button.disabled = disabled;
    }
}


/* =====================================================
   4. SUARA SEDERHANA
   ===================================================== */

let audioContext = null;

function playSound(type) {
    if (!GAME_SETTINGS.enableSound) {
        return;
    }

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) {
            return;
        }

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        const sounds = {
            correct: {
                frequency: 660,
                duration: 0.15
            },
            wrong: {
                frequency: 240,
                duration: 0.18
            },
            click: {
                frequency: 440,
                duration: 0.08
            },
            finish: {
                frequency: 790,
                duration: 0.25
            }
        };

        const sound = sounds[type] || sounds.click;

        oscillator.type = "sine";
        oscillator.frequency.value = sound.frequency;

        gain.gain.setValueAtTime(
            0.0001,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.12,
            audioContext.currentTime + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + sound.duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(
            audioContext.currentTime + sound.duration
        );
    } catch (error) {
        // Permainan tetap berjalan jika suara tidak tersedia.
    }
}


/* =====================================================
   5. MENENTUKAN JENIS PERMAINAN
   ===================================================== */

function getGameType() {
    const body = document.body;

    // Prioritas: atribut data-game pada body.
    if (body.dataset.game) {
        return body.dataset.game.toLowerCase();
    }

    // Alternatif: atribut pada elemen dengan ID gameType.
    const gameTypeElement = getElement("gameType");

    if (gameTypeElement) {
        return (
            gameTypeElement.dataset.game ||
            gameTypeElement.value ||
            gameTypeElement.textContent ||
            ""
        ).trim().toLowerCase();
    }

    // Alternatif berdasarkan nama file HTML.
    const fileName = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (fileName.includes("hewan")) return "hewan";
    if (fileName.includes("angka")) return "angka";
    if (fileName.includes("buah")) return "buah";
    if (fileName.includes("warna")) return "warna";
    if (fileName.includes("kuis")) return "kuis";

    return null;
}


/* =====================================================
   6. MEMULAI PERMAINAN
   ===================================================== */

function startGame(gameType) {
    const type = (
        gameType ||
        currentGame ||
        getGameType() ||
        ""
    ).toLowerCase();

    if (!GAME_DATA[type]) {
        console.warn(
            "Jenis permainan tidak ditemukan:",
            type
        );

        return;
    }

    currentGame = type;
    currentQuestions = selectQuestions(
        GAME_DATA[type],
        GAME_SETTINGS.questionsPerGame
    );

    currentQuestionIndex = 0;
    currentScore = 0;
    correctAnswers = 0;
    hintUsed = false;
    gameFinished = false;

    hideElement("startScreen");
    hideElement("resultScreen");
    showElement("gameScreen");

    setText("score", "0");
    setText("correctCount", "0");
    setText("totalQuestions", String(currentQuestions.length));

    renderQuestion();
    updateProgress();

    playSound("click");
}


/* =====================================================
   7. MENAMPILKAN SOAL
   ===================================================== */

function renderQuestion() {
    if (gameFinished) {
        return;
    }

    const question = currentQuestions[currentQuestionIndex];

    if (!question) {
        finishGame();
        return;
    }

    hintUsed = false;

    setText(
        "questionNumber",
        `Soal ${currentQuestionIndex + 1} dari ${currentQuestions.length}`
    );

    setText("question", question.question);
    setText("questionText", question.question);
    setText("questionImage", question.image);
    setText("gameIllustration", question.image);

    setText("feedback", "");
    setText("hintText", "");
    hideElement("hintBox");

    setButtonDisabled("hintButton", false);

    const hintButton = getElement("hintButton");

    if (hintButton) {
        hintButton.textContent = "💡 Petunjuk";
    }

    const optionsContainer =
        getElement("options") ||
        getElement("gameOptions");

    if (!optionsContainer) {
        console.warn(
            "Elemen #options atau #gameOptions tidak ditemukan."
        );

        return;
    }

    optionsContainer.replaceChildren();

    const shuffledOptions = shuffleArray(question.options);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "game-option";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(option, button);
        });

        optionsContainer.appendChild(button);
    });

    setButtonDisabled("nextButton", true);

    updateProgress();
}


/* =====================================================
   8. MEMERIKSA JAWABAN
   ===================================================== */

function checkAnswer(selectedAnswer, selectedButton) {
    if (gameFinished) {
        return;
    }

    const optionsContainer =
        getElement("options") ||
        getElement("gameOptions");

    if (
        !optionsContainer ||
        optionsContainer.dataset.answered === "true"
    ) {
        return;
    }

    optionsContainer.dataset.answered = "true";

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.answer;

    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        correctAnswers++;

        currentScore += hintUsed
            ? GAME_SETTINGS.pointsWithHint
            : GAME_SETTINGS.pointsPerCorrect;

        setText("feedback", "🎉 Hebat! Jawabanmu benar!");

        const feedback = getElement("feedback");

        if (feedback) {
            feedback.style.color = "#24845f";
        }

        playSound("correct");
    } else {
        selectedButton.classList.add("wrong");

        setText(
            "feedback",
            `😊 Belum tepat. Jawaban yang benar adalah ${question.answer}.`
        );

        const feedback = getElement("feedback");

        if (feedback) {
            feedback.style.color = "#d94365";
        }

        playSound("wrong");
    }

    setText("score", String(currentScore));
    setText("correctCount", String(correctAnswers));

    setButtonDisabled("hintButton", true);
    setButtonDisabled("nextButton", false);

    if (currentQuestionIndex === currentQuestions.length - 1) {
        setText("nextButton", "Lihat Hasil 🏆");
    } else {
        setText("nextButton", "Soal Berikutnya ➜");
    }

    updateProgress();
}


/* =====================================================
   9. PETUNJUK
   ===================================================== */

function showHint() {
    if (gameFinished || hintUsed) {
        return;
    }

    const question = currentQuestions[currentQuestionIndex];

    if (!question) {
        return;
    }

    hintUsed = true;

    setText("hintText", `💡 ${question.hint}`);
    showElement("hintBox");

    setButtonDisabled("hintButton", true);
    setText("hintButton", "Petunjuk Digunakan");

    playSound("click");
}


/* =====================================================
   10. SOAL BERIKUTNYA
   ===================================================== */

function nextQuestion() {
    if (gameFinished) {
        return;
    }

    const optionsContainer =
        getElement("options") ||
        getElement("gameOptions");

    // Jangan lanjut jika jawaban belum dipilih.
    if (
        optionsContainer &&
        optionsContainer.dataset.answered !== "true"
    ) {
        setText(
            "feedback",
            "Pilih salah satu jawaban terlebih dahulu, ya! 😊"
        );

        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuestions.length) {
        finishGame();
        return;
    }

    if (optionsContainer) {
        delete optionsContainer.dataset.answered;
    }

    renderQuestion();
    playSound("click");
}


/* =====================================================
   11. PROGRES PERMAINAN
   ===================================================== */

function updateProgress() {
    const total = currentQuestions.length;

    if (!total) {
        return;
    }

    const completed = Math.min(
        currentQuestionIndex +
        (getElement("nextButton")?.disabled === false ? 1 : 0),
        total
    );

    const percentage = (completed / total) * 100;

    const progressBar = getElement("progressBar");

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute(
            "aria-valuenow",
            String(Math.round(percentage))
        );
    }

    setText("progressText", `${Math.round(percentage)}%`);
}


/* =====================================================
   12. MENYELESAIKAN PERMAINAN
   ===================================================== */

function finishGame() {
    gameFinished = true;

    hideElement("gameScreen");
    hideElement("startScreen");
    showElement("resultScreen");

    const total = currentQuestions.length;
    const percentage = total
        ? Math.round((correctAnswers / total) * 100)
        : 0;

    let stars = 1;
    let message = "Bagus! Terus berlatih, ya! 💪";
    let emoji = "🌱";

    if (percentage >= 90) {
        stars = 3;
        message = "Luar biasa! Kamu hebat sekali! 🏆";
        emoji = "🏆";
    } else if (percentage >= 70) {
        stars = 2;
        message = "Hebat! Kamu semakin pintar! ⭐";
        emoji = "🌟";
    } else if (percentage >= 40) {
        stars = 2;
        message = "Bagus! Ayo belajar dan mencoba lagi! 😊";
        emoji = "🌈";
    }

    setText("resultEmoji", emoji);
    setText("resultMessage", message);
    setText("resultScore", String(currentScore));
    setText("resultCorrect", `${correctAnswers} dari ${total}`);
    setText("resultPercentage", `${percentage}%`);
    setText("resultStars", "⭐".repeat(stars));

    const finalProgress = getElement("progressBar");

    if (finalProgress) {
        finalProgress.style.width = "100%";
        finalProgress.setAttribute("aria-valuenow", "100");
    }

    setText("progressText", "100%");

    playSound("finish");
}


/* =====================================================
   13. MENGULANG PERMAINAN
   ===================================================== */

function restartGame() {
    startGame(currentGame || getGameType());
}


/* =====================================================
   14. PENGATUR SUARA
   ===================================================== */

function toggleSound() {
    GAME_SETTINGS.enableSound = !GAME_SETTINGS.enableSound;

    const soundButton = getElement("soundButton");

    if (soundButton) {
        soundButton.textContent = GAME_SETTINGS.enableSound
            ? "🔊 Suara Aktif"
            : "🔇 Suara Mati";

        soundButton.setAttribute(
            "aria-pressed",
            String(GAME_SETTINGS.enableSound)
        );
    }

    if (GAME_SETTINGS.enableSound) {
        playSound("click");
    }
}


/* =====================================================
   15. NAVIGASI MENU HP
   ===================================================== */

function initializeMobileMenu() {
    const menuToggle = getElement("menuToggle");
    const navLinks = getElement("navLinks");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";
        });
    });
}


/* =====================================================
   16. TOMBOL PERMAINAN
   ===================================================== */

function initializeGameButtons() {
    const startButton = getElement("startButton");
    const nextButton = getElement("nextButton");
    const hintButton = getElement("hintButton");
    const restartButton = getElement("restartButton");
    const playAgainButton = getElement("playAgainButton");
    const soundButton = getElement("soundButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            startGame(getGameType());
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextQuestion);
    }

    if (hintButton) {
        hintButton.addEventListener("click", showHint);
    }

    if (restartButton) {
        restartButton.addEventListener("click", restartGame);
    }

    if (playAgainButton) {
        playAgainButton.addEventListener("click", restartGame);
    }

    if (soundButton) {
        soundButton.addEventListener("click", toggleSound);
    }
}


/* =====================================================
   17. TAHUN FOOTER
   ===================================================== */

function initializeFooterYear() {
    const yearElement = getElement("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


/* =====================================================
   18. INISIALISASI
   ===================================================== */

function initializeApp() {
    initializeMobileMenu();
    initializeGameButtons();
    initializeFooterYear();

    const gameType = getGameType();

    // Jangan otomatis memulai permainan jika halaman
    // memiliki layar pembuka dengan tombol Mulai.
    if (gameType && GAME_DATA[gameType]) {
        currentGame = gameType;

        if (!getElement("startScreen")) {
            startGame(gameType);
        }
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );
} else {
    initializeApp();
}
