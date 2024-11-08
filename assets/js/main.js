const endpoint = "http://192.168.137.81"; // Alamat endpoint API yang akan diakses untuk mengatur dan mengambil status LED

// Fungsi untuk mendapatkan status LED di ruang tamu
function getTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "GET",
  })
    .then((response) => response.text()) // Ambil teks respons dari server
    .then((result) => {
      if (result == "ON") {
        // Jika LED menyala
        ledTamu.style.background = "blue"; // Ubah latar belakang elemen LED tamu menjadi biru
        tamuLedImage.src = "./assets/img/led-on.png"; // Tampilkan gambar LED menyala
      } else {
        ledTamu.style.background = "#579fff"; // Latar belakang LED tamu menjadi warna default
        tamuLedImage.src = "./assets/img/led-off.png"; // Tampilkan gambar LED mati
      }
    });
}

// Fungsi untuk mendapatkan status LED di ruang lab
function getLabLed() {
  fetch(endpoint + "/lab", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledLab.style.background = "blue";
        labLedImage.src = "./assets/img/led-on.png";
      } else {
        ledLab.style.background = "#579fff";
        labLedImage.src = "./assets/img/led-off.png";
      }
    });
}

// Fungsi untuk mendapatkan status LED di kamar mandi (WC)
function getWcLed() {
  fetch(endpoint + "/wc", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledWc.style.background = "blue";
        wcLedImage.src = "./assets/img/led-on.png";
      } else {
        ledWc.style.background = "#579fff";
        wcLedImage.src = "./assets/img/led-off.png";
      }
    });
}

// Fungsi untuk mendapatkan status LED di dapur
function getDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledDapur.style.background = "blue";
        dapurLedImage.src = "./assets/img/led-on.png";
      } else {
        ledDapur.style.background = "#579fff";
        dapurLedImage.src = "./assets/img/led-off.png";
      }
    });
}

// Fungsi untuk mengubah status LED di ruang tamu
function setTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "POST",
  })
    .then((response) => response.text()) // Ambil respons teks dari server
    .then(() => location.reload()); // Refresh halaman untuk memperbarui status LED
}

// Fungsi untuk mengubah status LED di ruang lab
function setLabLed() {
  fetch(endpoint + "/lab", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

// Fungsi untuk mengubah status LED di kamar mandi (WC)
function setWcLed() {
  fetch(endpoint + "/wc", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

// Fungsi untuk mengubah status LED di dapur
function setDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

// Fungsi untuk mendapatkan status FAN di ruang tamu
// function getTamuFan() {
//   fetch(endpoint + "/fan/tamu", {
//     method: "GET",
//   })
//     .then((response) => response.text()) // Ambil teks respons dari server
//     .then((result) => {
//       if (result == "ON") {
//         // Jika FAN menyala
//         fanTamu.style.background = "blue"; // Ubah latar belakang elemen FAN tamu menjadi biru
//         tamuFanImage.src = "./assets/img/fan-on.png"; // Tampilkan gambar FAN menyala
//       } else {
//         fanTamu.style.background = "#579fff"; // Latar belakang FAN tamu menjadi warna default
//         tamuFanImage.src = "./assets/img/fan-off.png"; // Tampilkan gambar FAN mati
//       }
//     });
// }

// // Fungsi untuk mendapatkan status FAN di ruang lab
// function getLabFan() {
//   fetch(endpoint + "/fan/lab", {
//     method: "GET",
//   })
//     .then((response) => response.text())
//     .then((result) => {
//       if (result == "ON") {
//         fanTamu.style.background = "blue";
//         tamuFanImage.src = "./assets/img/fan-on.png";
//       } else {
//         fanTamu.style.background = "#579fff";
//         tamuFanImage.src = "./assets/img/fan-off.png";
//       }
//     });
// }

// // Fungsi untuk mendapatkan status FAN di kamar mandi (WC)
// function getWcFan() {
//   fetch(endpoint + "/fan/wc", {
//     method: "GET",
//   })
//     .then((response) => response.text())
//     .then((result) => {
//       if (result == "ON") {
//         fanTamu.style.background = "blue";
//         tamuFanImage.src = "./assets/img/fan-on.png";
//       } else {
//         fanTamu.style.background = "#579fff";
//         tamuFanImage.src = "./assets/img/fan-off.png";
//       }
//     });
// }

// // Fungsi untuk mendapatkan status LED di dapur
// function getDapurFan() {
//   fetch(endpoint + "/fan/dapur", {
//     method: "GET",
//   })
//     .then((response) => response.text())
//     .then((result) => {
//       if (result == "ON") {
//         fanTamu.style.background = "blue";
//         tamuFanImage.src = "./assets/img/fan-on.png";
//       } else {
//         fanTamu.style.background = "#579fff";
//         tamuFanImage.src = "./assets/img/fan-off.png";
//       }
//     });
// }

// // Fungsi untuk mengubah status FAN di ruang tamu
// function setTamuFan() {
//   fetch(endpoint + "/fan/tamu", {
//     method: "POST",
//   })
//     .then((response) => response.text()) // Ambil respons teks dari server
//     .then(() => location.reload()); // Refresh halaman untuk memperbarui status FAN
// }

// // Fungsi untuk mengubah status FAN di ruang lab
// function setLabFan() {
//   fetch(endpoint + "/fan/lab", {
//     method: "POST",
//   })
//     .then((response) => response.text())
//     .then(() => location.reload());
// }

// // Fungsi untuk mengubah status FAN di kamar mandi (WC)
// function setWcFan() {
//   fetch(endpoint + "/fan/wc", {
//     method: "POST",
//   })
//     .then((response) => response.text())
//     .then(() => location.reload());
// }

// // Fungsi untuk mengubah status FAN di dapur
// function setDapurFan() {
//   fetch(endpoint + "/fan/dapur", {
//     method: "POST",
//   })
//     .then((response) => response.text())
//     .then(() => location.reload());
// }

// Memanggil fungsi untuk mendapatkan status awal setiap LED saat halaman pertama kali dimuat
getTamuLed();
getLabLed();
getWcLed();
getDapurLed();

// Memanggil fungsi untuk mendapatkan status awal setiap FAN saat halaman pertama kali dimuat
// getTamuFan();
// getLabFan();
// getWcFan();
// getDapurFan();
