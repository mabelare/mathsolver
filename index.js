let display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById("display");
  display.innerText = "0";
}
function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("x", "*"));
  } catch {
    display.innerText = "Error";
  }
}
