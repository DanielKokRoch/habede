// Tanggal dan waktu target (7 Mei 2024 jam 9 pagi WIB)
var targetDate = new Date("May 7, 2024 09:00:00 GMT+0700");

function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        // Jika sudah melewati waktu target, tampilkan tombol dan atur aksi kliknya
        document.getElementById("flowerButton").style.display = "block";
        document.getElementById("flowerButton").onclick = function() {
            alert("OK udah bisa kamu akses :D");
            window.location.href = "flower.html";
        };
    } else {
        // Jika belum mencapai waktu target, tombol akan ditampilkan tetapi tidak dapat diklik
        document.getElementById("flowerButton").style.display = "block";
        document.getElementById("flowerButton").onclick = function() {
            alert("Sabar, tunggu countdown habis!");
        };

        // Hitung selisih waktu dan tampilkan countdown
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update elemen countdown di pojok kiri atas halaman
        document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Perbarui setiap detik
        setTimeout(updateCountdown, 1000);
    }
}

// Panggil fungsi updateCountdown saat halaman dimuat
window.onload = updateCountdown;