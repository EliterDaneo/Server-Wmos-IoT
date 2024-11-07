// Fungsi untuk mengubah status LED di ruang tamu
function setTamuLed() {
  ledTamu.style.background = "red"; // Latar belakang Led tamu menjadi warna default
  tamuLedImage.src = "./assets/img/led-on.png"; // Tampilkan gambar Led mati
}

// Fungsi untuk mengubah status LED di ruang lab
function setLabLed() {
  ledLab.style.background = "red";
  labLedImage.src = "./assets/img/led-on.png";
}

// Fungsi untuk mengubah status LED di kamar mandi (WC)
function setWcLed() {
  ledWc.style.background = "red";
  wcLedImage.src = "./assets/img/led-on.png";
}

// Fungsi untuk mengubah status LED di dapur
function setDapurLed() {
  ledDapur.style.background = "red";
  dapurLedImage.src = "./assets/img/led-on.png";
}

// Fungsi untuk mengubah status FAN di ruang tamu
function setTamuFan() {
  fanTamu.style.background = "red";
  tamuFanImage.src = "./assets/img/fan-on.png";
}

// Fungsi untuk mengubah status FAN di ruang lab
function setLabFan() {
  fanLab.style.background = "red";
  labFanImage.src = "./assets/img/fan-on.png";
}

// Fungsi untuk mengubah status FAN di kamar mandi (WC)
function setWcFan() {
  fanWc.style.background = "red";
  wcFanImage.src = "./assets/img/fan-on.png";
}

// Fungsi untuk mengubah status FAN di dapur
function setDapurFan() {
  fanDapur.style.background = "red";
  dapurFanImage.src = "./assets/img/fan-on.png";
}
