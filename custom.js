let pages_text = document.getElementById("pages-text");
let dropdown_menu = document.querySelector(".dropdown_menu");

pages_text.addEventListener("click", function (e) {
  e.preventDefault();
  pages_text.classList.toggle("active");
  dropdown_menu.style.display =
    dropdown_menu.style.display === "block" ? "none" : "block";
});

let wishlist = document.getElementById("wishlist");
let wishlist_menu = document.querySelector(".wishlist-menu");

wishlist.addEventListener("click", function (e) {
  e.preventDefault() ;
  wishlist.classList.toggle("active");
  wishlist_menu.style.display =
    wishlist_menu.style.display === "block" ? "none" : "block";
})

let cart = document.querySelector("#cart");
let main_cart = document.querySelector(".main-cart");

cart.addEventListener("click", function (e) {
  e.preventDefault();
  cart.classList.toggle("active");
  main_cart.style.display =
    main_cart.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (e) {
  // Dropdown
  if (!pages_text.contains(e.target) && !dropdown_menu.contains(e.target)) {
    dropdown_menu.style.display = "none";
  }

  // Wishlist
  if (!wishlist.contains(e.target) && !wishlist_menu.contains(e.target)) {
    wishlist_menu.style.display = "none";
    wishlist.classList.remove("active");
  }

  // Cart
  if (!cart.contains(e.target) && !main_cart.contains(e.target)) {
    main_cart.style.display = "none";
    cart.classList.remove("active");
  }
});