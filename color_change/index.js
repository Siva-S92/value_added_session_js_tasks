const greenButton = document.getElementById("green");
greenButton.addEventListener("click", () => {
  document.getElementById("round").style.backgroundColor = "green";
});

const blueButton = document.getElementById("blue");
blueButton.addEventListener("click", () => {
  document.getElementById("round").style.backgroundColor = "blue";
});

const colorInput = document.getElementById("colorInput");
colorInput.addEventListener("change", () => {
  document.getElementById("round").style.backgroundColor = colorInput.value;
});
