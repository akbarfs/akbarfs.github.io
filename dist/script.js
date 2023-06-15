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