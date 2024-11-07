const endpoint = "http://10.10.10.01";

function getTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "GET",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledTamu.style.background = "blue";
        tamuLedImage.src = "./assets/img/led-on.png";
      } else {
        ledTamu.style.background = "#579fff";
        tamuLedImage.src = "./assets/img/led-off.png";
      }
    });
}

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

function setTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
}

function setLabLed() {
  fetch(endpoint + "/lab", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
  ledLab.style.background = "red";
  labLedImage.src = "./assets/img/led-on.png";
}

function setWcLed() {
  fetch(endpoint + "/wc", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
  ledWc.style.background = "red";
  wcLedImage.src = "./assets/img/led-on.png";
}

function setDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "POST",
  })
    .then((response) => response.text())
    .then(() => location.reload());
  ledDapur.style.background = "red";
  dapurLedImage.src = "./assets/img/led-on.png";
}

getTamuLed();
getLabLed();
getWcLed();
getDapurLed();
