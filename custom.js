let pages_text = document.getElementById("pages-text");
let dropdown_menu = document.querySelector(".dropdown_menu");

pages_text.addEventListener("click", function (e) {
  e.preventDefault();
  pages_text.classList.toggle("active");
  dropdown_menu.style.display =
    dropdown_menu.style.display === "block" ? "none" : "block";
});