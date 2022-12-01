"use strict";

function showDog() {
  console.log("tried");
  const dog_img = document.getElementById("dog");
  if (dog_img.className == "on") {
    document.getElementById("dog").style.display("none");
    document.getElementById("dog").className = "off";
  } else {
    document.getElementById("dog").style.display("block");
    document.getElementById("dog").className = "on";
  }
}
