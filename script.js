
    document.addEventListener("DOMContentLoaded", function () {
        const typewriterElement = document.getElementById("typewriter");
        const text = "Halo, Saya Elysha Murni"; // Teks yang akan diketik
        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                typewriterElement.textContent += text[charIndex];
                charIndex++;
                setTimeout(type, 100); // Waktu antar karakter
            }
        }

        type(); // Memulai animasi
    });

