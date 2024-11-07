#include <WiFi.h>
#include <WebServer.h>

// Definisi WiFi
const char* ssid = "HUAWEI-2.4G-ZRw7";
const char* password = "iniprivasigue";

// Inisialisasi server pada port 80
WebServer server(80);

// Definisikan pin LED
const int espLed = 2;
const int ledPin1 = 4;  // Pin GPIO 4
const int ledPin2 = 5;  // Pin GPIO 5
const int ledPin3 = 19; // Pin GPIO 19
const int ledPin4 = 20; // Pin GPIO 19

// Status LED
bool tamuLed = false;
bool labLed = false;
bool wcLed = false;
bool dapurLed = false;

void setup() {
  Serial.begin(115200);

  // Konfigurasi pin LED sebagai OUTPUT
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(espLed, OUTPUT);

  // Matikan semua LED di awal
  digitalWrite(ledPin1, LOW);  
  digitalWrite(ledPin2, LOW);  
  digitalWrite(ledPin3, LOW); 
  digitalWrite(ledPin4, LOW); 

  // Koneksi ke WiFi
  WiFi.begin(ssid, password);
  Serial.print("Menghubungkan ke WiFi");
  
  while(WiFi.status() != WL_CONNECTED) {
    digitalWrite(espLed, LOW);
    delay(1000);
    Serial.print(".");
  }
  
  digitalWrite(espLed, HIGH);
  Serial.println("");
  Serial.println("Terhubung ke WiFi!");
  Serial.println("IP Address: " + WiFi.localIP().toString());

  // API Endpoint
  server.on("/tamu", HTTP_GET, getTamuLed);
  server.on("/lab", HTTP_GET, getLabLed);
  server.on("/wc", HTTP_GET, getWcLed);
  server.on("/dapur", HTTP_GET, getDapurLed);

  server.on("/tamu", HTTP_POST, setTamuLed);
  server.on("/lab", HTTP_POST, setLabLed);
  server.on("/wc", HTTP_POST, setWcLed);
  server.on("/dapur", HTTP_POST, setDapurLed);

  // Penanganan URL tidak ditemukan
  server.onNotFound(handleNotFound);

  // Mulai server
  server.begin();
  Serial.println("Server dimulai...");
}

void loop() {
  server.handleClient();
}

// Fungsi API untuk menyalakan atau mematikan LED tamu
void setTamuLed() {
  tamuLed = !tamuLed;
  digitalWrite(ledPin1, tamuLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", tamuLed ? "ON" : "OFF");
}

// Fungsi API untuk menyalakan atau mematikan LED lab
void setLabLed() {
  labLed = !labLed;
  digitalWrite(ledPin2, labLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", labLed ? "ON" : "OFF");
}

// Fungsi API untuk menyalakan atau mematikan LED wc
void setWcLed() {
  wcLed = !wcLed;
  digitalWrite(ledPin3, wcLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", wcLed ? "ON" : "OFF");
}

// Fungsi API untuk menyalakan atau mematikan LED wc
void setDapurLed() {
  dapurLed = !dapurLed;
  digitalWrite(ledPin4, dapurLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", dapurLed ? "ON" : "OFF");
}

// Fungsi API untuk mendapatkan status LED tamu
void getTamuLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", tamuLed ? "ON" : "OFF");
}

// Fungsi API untuk mendapatkan status LED lab
void getLabLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", labLed ? "ON" : "OFF");
}

// Fungsi API untuk mendapatkan status LED wc
void getWcLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", wcLed ? "ON" : "OFF");
}

void getDapurLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", dapurLed ? "ON" : "OFF");
}

// Fungsi untuk menangani URL yang tidak ditemukan
void handleNotFound() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(404, "text/plain", "404: Not Found");
}
