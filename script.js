let minButton = document.querySelector(".quantity__button--min");
let plusButton = document.querySelector(".quantity__button--plus");
let quantity = document.querySelector(".quantity__value");
let button = document.querySelector(".button");
let cart = document.querySelector(".header__cart");
let image = document.querySelector(".pictures__current-picture img");
let tumbnails = document.querySelectorAll(".pictures__tumbnail");

minButton.addEventListener("click", () => changeQuantity(true));
plusButton.addEventListener("click", () => changeQuantity());
button.addEventListener("click", () => {
  changeQuantity(false, true);
  fireCartAnimation();
});

tumbnails.forEach((t) => {
  t.addEventListener("click", () => {
    let img = t.querySelector("img").getAttribute("src");
    changePicture(img);
    tumbnails.forEach((t) => t.classList.remove("pictures__tumbnail--active"));
    t.classList.add("pictures__tumbnail--active");
  });
});

function changeQuantity(min, reset = false) {
  let currentQuantity = Number(quantity.dataset.amount);
  let newValue = reset ? 1 : min ? currentQuantity - 1 : currentQuantity + 1;
  if (newValue < 1 || newValue > 99) return;
  quantity.dataset.amount = newValue;
  quantity.innerText = newValue;
}

function fireCartAnimation() {
  cart.style.transform = "scale(2)";
  setTimeout(() => {
    cart.style.transform = "scale(1)";
  }, 1000);
}

function changePicture(picture) {
  let src = picture.replace("-thumbnail", "");
  image.setAttribute("src", src);
}
