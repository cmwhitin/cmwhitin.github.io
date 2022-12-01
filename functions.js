"use strict";

function showDog() {
  console.log("tried");
  const dog_img = document.getElementById("dog");
  if (dog_img.className === "on") {
    dog_img.style.display = "none";
    dog_img.className = "off";
  } else {
    dog_img.style.display = "block";
    dog_img.className = "on";
  }
}
