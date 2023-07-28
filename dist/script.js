const hoverText = document.getElementById("hoverText");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

hoverText.addEventListener("mouseenter", () => {
  cursor.style.visibility = "visible";
});

hoverText.addEventListener("mouseleave", () => {
  cursor.style.visibility = "hidden";
});

function openMenu(menuName){
  var i;
  var x = document.getElementsByClassName("menu");
  for(i=0;i<x.length;i++){
    x[i].style.display = "none";
  }
  document.getElementById(menuName).style.display = "block";
}