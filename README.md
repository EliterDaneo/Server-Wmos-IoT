# Wemos D1 R32 Project 🌐

> **Menghubungkan dunia nyata dengan IoT: proyek menggunakan Wemos D1 R32 untuk kontrol perangkat pintar!**

Wemos D1 R32 adalah board mikrokontroler yang menggabungkan kekuatan ESP32 dan kompatibilitas dengan arsitektur Arduino, membuatnya ideal untuk proyek Internet of Things (IoT). Dalam proyek ini, kita akan membahas cara menghubungkan, mengontrol, dan memanfaatkan fitur Wi-Fi untuk membuat perangkat yang pintar dan terhubung.

![Wemos D1 R32](https://user-images.githubusercontent.com/your-image-url.png)

## 🔧 Fitur Utama Wemos D1 R32

- **Mikrokontroler ESP32** dengan konektivitas Wi-Fi dan Bluetooth.
- **Kompatibilitas Arduino**: dapat diprogram menggunakan Arduino IDE.
- **Dukungan GPIO yang kaya**: mendukung sensor, modul, dan perangkat lainnya.
- **Pengembangan IoT**: Ideal untuk aplikasi kontrol jarak jauh, pemantauan, dan automasi rumah.

## 📋 Spesifikasi Teknis

- **Mikrokontroler**: ESP32
- **CPU**: Dual-core Tensilica LX6
- **Frekuensi CPU**: Hingga 240MHz
- **RAM**: 520KB SRAM
- **Wi-Fi**: 802.11 b/g/n
- **Bluetooth**: Bluetooth 4.2 dan Bluetooth Low Energy (BLE)
- **GPIO Pins**: 34 pin
- **Antarmuka**: UART, SPI, I2C, PWM, ADC, DAC
- **Tegangan Input**: 5V melalui port USB atau 7-12V melalui pin VIN

## 🚀 Memulai Proyek

### 1. Persyaratan

- **Hardware**:
  - Wemos D1 R32
  - Kabel USB (Micro USB)
  - Sensor atau modul yang sesuai (misalnya LED, relay, sensor suhu)

- **Software**:
  - [Arduino IDE](https://www.arduino.cc/en/software)
  - [ESP32 Board Manager](https://github.com/espressif/arduino-esp32)

### 2. Menginstal Board ESP32 di Arduino IDE

1. Buka **Arduino IDE**.
2. Pergi ke **File > Preferences**.
3. Tambahkan URL berikut ke **Additional Board Manager URLs**:
4. Buka **Tools > Board > Board Manager** dan cari "ESP32".
5. Klik **Install** untuk menginstal dukungan board ESP32.
