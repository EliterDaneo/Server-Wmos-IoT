#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <WebServer.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

//definisi wifi
const char* ssid = "BOT_IOT";
const char* password = "12345678";

WebServer server(80);

// Definisikan pin LED
const int espLed = 2;
const int ledPin1 = 4;  // Pin GPIO 4
const int ledPin2 = 5;  // Pin GPIO 5
const int ledPin3 = 19; // Pin GPIO 19
const int ledPin4 = 13; // Pin GPIO 13

bool tamuLed = false;
bool labLed = false;
bool wcLed = false;
bool dapurLed = false;

void setup() {
  Serial.begin(115200);

  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(espLed, OUTPUT);

  digitalWrite(ledPin1, LOW);  
  digitalWrite(ledPin2, LOW);  
  digitalWrite(ledPin3, LOW); 
  digitalWrite(ledPin4, LOW); 

  WiFi.begin(ssid, password);
  Serial.print("Konek ke WiFi");

  while(WiFi.status() != WL_CONNECTED){
    digitalWrite(espLed, LOW);
    delay(1000);
    Serial.print(".");
  }
  digitalWrite(espLed, HIGH);
  Serial.println("");
  Serial.println("Konek Ke wifi!");
  Serial.println(WiFi.localIP());

  //api
  server.on("/tamu", HTTP_GET, getTamuLed);
  server.on("/lab", HTTP_GET, getLabLed);
  server.on("/wc", HTTP_GET, getWcLed);
  server.on("/dapur", HTTP_GET, getDapurLed);

  server.on("/tamu", HTTP_POST, setTamuLed);
  server.on("/lab", HTTP_POST, setLabLed);
  server.on("/wc", HTTP_POST, setWcLed);
  server.on("/dapur", HTTP_POST, setDapurLed);

  server.begin();
  Serial.println("Server Start..");

  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Ip Address");
  lcd.setCursor(0,1);
  lcd.print(WiFi.localIP());
}

void loop() {
   server.handleClient();
}

void setTamuLed(){
  tamuLed = !tamuLed;
  digitalWrite(ledPin1, tamuLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", tamuLed ? "ON" : "OFF");
}

void setLabLed(){
  labLed = !labLed;
  digitalWrite(ledPin2, labLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", labLed ? "ON" : "OFF");
}

void setWcLed(){
  wcLed = !wcLed;
  digitalWrite(ledPin3, wcLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", wcLed ? "ON" : "OFF");
}

void setDapurLed(){
  dapurLed = !dapurLed;
  digitalWrite(ledPin4, dapurLed ? HIGH : LOW);
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", dapurLed ? "ON" : "OFF");
}

void getTamuLed(){
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", tamuLed ? "ON" : "OFF");
}

void getLabLed(){
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", labLed ? "ON" : "OFF");
}

void getWcLed(){
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", wcLed ? "ON" : "OFF");
}

void getDapurLed(){
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", dapurLed ? "ON" : "OFF");
}
