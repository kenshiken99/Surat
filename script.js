// Menampilkan background secara bergantian
let backgroundImages = document.querySelectorAll('.background');
let currentImageIndex = 0;

function changeBackground() {
    // Menghilangkan class 'show' dari gambar yang sedang tampil
    backgroundImages.forEach((image) => {
        image.classList.remove('show');
    });

    // Menambahkan class 'show' pada gambar berikutnya
    backgroundImages[currentImageIndex].classList.add('show');

    // Pindah ke gambar berikutnya
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

setInterval(changeBackground, 4000); // Ganti gambar setiap 5 detik

const texts = [
    "Wah kamu berhasil menemukan surat yang sesungguhnya!",
    "Jangan lupa hidupkan musik nya ya",
    "Dia ada di kanan atas surat ini",
    "Oke pertama-tama",
    "Selamat datang!",
    "Hai sosok lelaki yang gagah dan pemberani...",
    "Hai sahabat baik ku tercinta dan tersayang",
    "Aku sangat bangga padamu",
    "Aku sangat menghargai segala usahamu",
    "Apakah pernah terpikirkan olehmu?",
    "Suatu hari kita akan semakin maju selangkah demi selangkah",
    "Baik kamu maupun aku",
    "Tak terasa hari kamu bekerja sudah tiba, masih kaget jujur",
    "Waktu yang biasanya kita habiskan bersama hampir seharian",
    "Kali ini bahkan tidak sampai setengah hari kita mengobrol",
    "Bekerja pasti berat untukmu. Terlebih tiada hari libur",
    "Kamu hebat sekali sudah menjadi lelaki dewasa",
    "Kamu memasuki dunia kerja, mencari pengalaman.. satu demi satu",
    "Kamu yang selama ini selalu ceria aku harap akan selalu ceria",
    "Aku mendukungmu sahabatku tersayang",
    "Aku memang tidak pandai memberi kejutan berupa teka teki yang seru",
    "Atau kata kata manis yang selalu dilontarkan 24/7",
    "Tapi aku mencoba semampuku untuk selalu ada untukmu",
    "Aku benar benar kagum kita berdua sudah sampai di titik ini",
    "Semua ini berkat kamu yang sangat mengerti aku, kamu yang sangat lembut dan halus kepadaku",
    "Aku sangat menyukainya! aku pikir lelaki sepertimu hanya ada 1 di dunia ini",
    "Untuk kamu yang membaca ini",
    "Terimakasih sudah melakukan yang terbaik sejak kita menjadi dekat hingga saat ini",
    "Mungkin ada banyak tantangan yang akan kamu hadapi setelah ini",
    "Dan ketika kamu lelah dan ingin mengeluh datanglah padaku",
    "Aku akan mencoba yang terbaik untuk menenangkanmu",
    "Untuk kamu yang melihat ini..",
    "Semangat yaa untuk hari ini dan seterusnya~",
    "Ingat ya, keberanian itu ada karena adanya rasa takut",
    "Mari lawan ketakutan itu bersama",
    "Ketika kamu berhasil melawan 1 ketakutan maka kamu akan 1 langkah lebih maju",
    "Aku pun akan melawan ketakutan aku bersamamu",
    "Mari berjuang bersama",
    "Pelan pelan saja.. dan kita akan berada di titik yang sama dan akan bertemu",
    "Dan setelah pertemuan itu akan muncul banyak ujian lain",
    "Kita masih harus banyak belajar untuk menghadapi segala ujian nanti",
    "Semangat untukmu dan aku",
    "Siapa sangka aku bisa menulis sebanyak ini",
    "Semoga dengan melihat ini kamu jadi semangat ya satu satunya sahabat laki-lakiku",
    "<3",
    "untuk selanjutnya silakan menikmati lagunya",
    "lagu ini sangat bagus!",
    "terimakasih sudah memperkenalkan aku gamenya!",
];


let currentTextIndex = 0;
const textContainer = document.getElementById('text-container');

// Fungsi untuk menampilkan teks dengan efek muncul dan hilang
function showNextText() {
    const textElements = document.querySelectorAll('.text');
    
    // Menghapus teks yang sudah ada jika ada lebih dari 4 baris
    if (textElements.length >= 4) {
        textElements[0].classList.remove('show');
        setTimeout(() => textElements[0].remove(), 4000); // Hapus setelah transisi selesai
    }

    if (currentTextIndex < texts.length) {
        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.textContent = texts[currentTextIndex];
        textContainer.appendChild(textElement);

        // Memberikan efek muncul
        void textElement.offsetWidth;
        textElement.classList.add('show');
        currentTextIndex++;
        setTimeout(showNextText, 4000); // Lanjutkan ke teks berikutnya setelah 3 detik
    }
}

window.onload = () => {
    showNextText();
    changeBackground(); // Mulai tampilan background
};

const music = document.getElementById('background-music');
const toggleMusicButton = document.getElementById('toggle-music');

// Menangani tombol musik
toggleMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        music.muted = false; // Unmute saat musik dimainkan
        toggleMusicButton.textContent = "Matikan Musik";
    } else {
        music.pause();
        toggleMusicButton.textContent = "Hidupkan Musik";
    }
});

// Pastikan musik mulai diputar setelah halaman dimuat jika perlu
window.onload = () => {
    music.play();
    music.muted = false;
    changeBackground();
    showNextText();
};

