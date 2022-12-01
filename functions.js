"use strict";

function showDog() {
  const dog_img = document.getElementById("dog");
  if (dog_img.className === "on") {
    dog_img.style.display = "none";
    dog_img.className = "off";
  } else {
    dog_img.style.display = "block";
    dog_img.className = "on";
  }
}

function showAlert() {
  const text = document.getElementById("myInput").value;
  window.alert(text);
  document.getElementById("myInput").value = "";
}
