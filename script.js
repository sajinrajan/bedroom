const menuClick = document.getElementById('menu')
const hiddenBar = document.getElementById('hidden-bar')
const closeButton = document.getElementById('close-btn')
console.log(menuClick)
menuClick.addEventListener("click", function() {
    hiddenBar.style.display = "grid";
  });
  closeButton.addEventListener("click", function() {
    hiddenBar.style.display = "none";
  });