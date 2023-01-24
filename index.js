// Isolation mode for product
for (let i = 0; i <= 3; i++) {
    document
        .getElementsByClassName("product")
        [i].addEventListener("dblclick", function () {
            document.querySelector(".when-clicked").style.display = "flex";
        });
}

// Display None for smaller devices
if (window.screen.width <= "1152px") {
    document.querySelector(".when-clicked").style.display = "none";
}

//Menu
function menu() {
    let sideNav = document.getElementById("side-nav");
    sideNav.style.display = "flex";
}

//Close
function closed() {
    document.getElementById("side-nav").style.display = "none";
}

function closeIsolation() {
    document.querySelector(".when-clicked").style.display = "none";
}

// Hover over cart image
const navCartImg = document.getElementById("nav-cart-img");

navCartImg.addEventListener("mouseover", function () {
    navCartImg.setAttribute("src", "./images/icon-cart -black.svg");
});

navCartImg.addEventListener("mouseout", function () {
    navCartImg.setAttribute("src", "./images/icon-cart.svg");
});

// Display Cart Box
function clickNavCartImg() {
    const cart = document.getElementById("cart");
    const showNumItems = document.getElementById("show-num-items");
    if (cart.style.display == "flex") {
        cart.style.display = "none";
        showNumItems.style.display = "none";
    } else {
        cart.style.display = "flex";
        showNumItems.style.display = "inline-block";
    }
}

// Hide product information on cart
for (let i = 0; i <= 3; i++) {
    document.getElementsByClassName("product-info")[i].style.display = "none";
}

//Display product information on cart
let firstItemClosed =
    document.getElementsByClassName("product-info")[0].style.display;
let secondItemClosed =
    document.getElementsByClassName("product-info")[1].style.display;
let thirdItemClosed =
    document.getElementsByClassName("product-info")[2].style.display;
let fourthItemClosed =
    document.getElementsByClassName("product-info")[3].style.display;

if (
    firstItemClosed == "none" &&
    secondItemClosed == "none" &&
    thirdItemClosed == "none" &&
    fourthItemClosed == "none"
) {
    document.querySelector(".empty-cart").style.display = "block";
    document.querySelector(".checkout").style.display = "none";
}

//  PRODUCT SLIDES  //

// Chose a new product by clicking thumbnail
function click(a) {
    for (i = 0; i < 4; i++) {
        document
            .getElementsByClassName("product-thumbnail")
            [i].classList.remove("border");
        document
            .getElementsByClassName("w-product-thumbnail")
            [i].classList.remove("border");

        document
            .getElementsByClassName("img-prod-thumbnail")
            [i].classList.remove("opacity");
        document
            .getElementsByClassName("w-img-prod-thumbnail")
            [i].classList.remove("opacity");
    }

    document
        .getElementsByClassName("product-thumbnail")
        [a - 1].classList.add("border");
    document
        .getElementsByClassName("w-product-thumbnail")
        [a - 1].classList.add("border");

    document
        .getElementsByClassName("img-prod-thumbnail")
        [a - 1].classList.add("opacity");
    document
        .getElementsByClassName("w-img-prod-thumbnail")
        [a - 1].classList.add("opacity");

    showProducts((productIndex = a));
    showProductsWhenCliked((productIndex = a));
}

let productIndex = 1;
showProducts(productIndex);
showProductsWhenCliked(productIndex);

// Controls
function plusSlides(n) {
    showProducts((productIndex += n));
}

function plusSlidesWhenClicked(n) {
    showProductsWhenCliked((productIndex += n));
}

function showProducts(n) {
    let i;
    let slides = document.getElementsByClassName("product");
    if (n > slides.length) {
        productIndex = 1;
    }
    if (n < 1) {
        productIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[productIndex - 1].style.display = "block";
    preciseItemsNumAndPrice();
    whenEmpty();
}

function showProductsWhenCliked(n) {
    let i;
    let slidesWhenC = document.getElementsByClassName("w-product");
    if (n > slidesWhenC.length) {
        productIndex = 1;
    }
    if (n < 1) {
        productIndex = slidesWhenC.length;
    }
    for (i = 0; i < slidesWhenC.length; i++) {
        slidesWhenC[i].style.display = "none";
    }
    slidesWhenC[productIndex - 1].style.display = "block";
}

//Delete items from cart

function delete_btn(c) {
    document.getElementsByClassName("product-info")[c - 1].style.display =
        "none";
    document.getElementsByClassName("num")[c].innerHTML = 1;
    hideCheckout();
    whenEmpty();
}

//Hide checkout and Display Cart's empty

function hideCheckout() {
    let firstItemClosed =
        document.getElementsByClassName("product-info")[0].style.display;
    let secondItemClosed =
        document.getElementsByClassName("product-info")[1].style.display;
    let thirdItemClosed =
        document.getElementsByClassName("product-info")[2].style.display;
    let fourthItemClosed =
        document.getElementsByClassName("product-info")[3].style.display;

    if (
        firstItemClosed == "none" &&
        secondItemClosed == "none" &&
        thirdItemClosed == "none" &&
        fourthItemClosed == "none"
    ) {
        document.querySelector(".empty-cart").style.display = "block";
        document.querySelector(".checkout").style.display = "none";
    }
}

//Checkout of cart
function checkout() {
    document.getElementById("cart").style.display = "none";
}

//Click add to cart
function addToCart() {
    let firstProduct =
        document.getElementsByClassName("product")[0].style.display;
    let secondProduct =
        document.getElementsByClassName("product")[1].style.display;
    let thirdProduct =
        document.getElementsByClassName("product")[2].style.display;
    let fourthProduct =
        document.getElementsByClassName("product")[3].style.display;

    if (firstProduct == "block") {
        document.getElementsByClassName("product-info")[0].style.display =
            "flex";
    }

    if (secondProduct == "block") {
        document.getElementsByClassName("product-info")[1].style.display =
            "flex";
    }

    if (thirdProduct == "block") {
        document.getElementsByClassName("product-info")[2].style.display =
            "flex";
    }

    if (fourthProduct == "block") {
        document.getElementsByClassName("product-info")[3].style.display =
            "flex";
    }

    let firstItemClosed =
        document.getElementsByClassName("product-info")[0].style.display;
    let secondItemClosed =
        document.getElementsByClassName("product-info")[1].style.display;
    let thirdItemClosed =
        document.getElementsByClassName("product-info")[2].style.display;
    let fourthItemClosed =
        document.getElementsByClassName("product-info")[3].style.display;

    if (
        firstItemClosed == "flex" ||
        secondItemClosed == "flex" ||
        thirdItemClosed == "flex" ||
        fourthItemClosed == "flex"
    ) {
        document.querySelector(".empty-cart").style.display = "none";
        document.querySelector(".checkout").style.display = "block";
    }

    document.getElementById("cart").style.display = "flex";
    document.getElementById("show-num-items").style.display = "block";

    preciseItemsNumAndPrice();
}

//Click minus button
function minus() {
    let firstProduct =
        document.getElementsByClassName("product")[0].style.display;
    let secondProduct =
        document.getElementsByClassName("product")[1].style.display;
    let thirdProduct =
        document.getElementsByClassName("product")[2].style.display;
    let fourthProduct =
        document.getElementsByClassName("product")[3].style.display;

    if (firstProduct == "block") {
        document.getElementsByClassName("num")[1].innerHTML--;
    }

    if (secondProduct == "block") {
        document.getElementsByClassName("num")[2].innerHTML--;
    }

    if (thirdProduct == "block") {
        document.getElementsByClassName("num")[3].innerHTML--;
    }

    if (fourthProduct == "block") {
        document.getElementsByClassName("num")[4].innerHTML--;
    }

    max_minNumItems();
    preciseItemsNumAndPrice();
    hideCheckout();
}

//Click plus button
function plus() {
    let firstProduct =
        document.getElementsByClassName("product")[0].style.display;
    let secondProduct =
        document.getElementsByClassName("product")[1].style.display;
    let thirdProduct =
        document.getElementsByClassName("product")[2].style.display;
    let fourthProduct =
        document.getElementsByClassName("product")[3].style.display;

    if (firstProduct == "block") {
        document.getElementsByClassName("num")[1].innerHTML++;
    }

    if (secondProduct == "block") {
        document.getElementsByClassName("num")[2].innerHTML++;
    }

    if (thirdProduct == "block") {
        document.getElementsByClassName("num")[3].innerHTML++;
    }

    if (fourthProduct == "block") {
        document.getElementsByClassName("num")[4].innerHTML++;
    }

    max_minNumItems();
    preciseItemsNumAndPrice();
}

function whenEmpty() {
    let firstItemClosed =
        document.getElementsByClassName("product-info")[0].style.display;
    let secondItemClosed =
        document.getElementsByClassName("product-info")[1].style.display;
    let thirdItemClosed =
        document.getElementsByClassName("product-info")[2].style.display;
    let fourthItemClosed =
        document.getElementsByClassName("product-info")[3].style.display;

    if (
        firstItemClosed != "flex" &&
        secondItemClosed != "flex" &&
        thirdItemClosed != "flex" &&
        fourthItemClosed != "flex"
    ) {
        document.getElementsByClassName("num")[0].innerHTML = 0;
    }
}

function preciseItemsNumAndPrice() {
    let firstProduct =
        document.getElementsByClassName("product")[0].style.display;
    let secondProduct =
        document.getElementsByClassName("product")[1].style.display;
    let thirdProduct =
        document.getElementsByClassName("product")[2].style.display;
    let fourthProduct =
        document.getElementsByClassName("product")[3].style.display;

    if (firstProduct == "block") {
        document.getElementsByClassName("num")[0].innerHTML =
            document.getElementsByClassName("num")[1].innerHTML;
        document.querySelector("div.one").innerHTML =
            document.getElementsByClassName("num")[1].innerHTML;
        document.getElementsByClassName("price-total")[0].innerHTML =
            "$" +
            document.getElementsByClassName("num")[1].innerHTML * 125 +
            ".00";
    }

    if (secondProduct == "block") {
        document.getElementsByClassName("num")[0].innerHTML =
            document.getElementsByClassName("num")[2].innerHTML;
        document.querySelector("div.one").innerHTML =
            document.getElementsByClassName("num")[2].innerHTML;
        document.getElementsByClassName("price-total")[1].innerHTML =
            "$" +
            document.getElementsByClassName("num")[2].innerHTML * 125 +
            ".00";
    }

    if (thirdProduct == "block") {
        document.getElementsByClassName("num")[0].innerHTML =
            document.getElementsByClassName("num")[3].innerHTML;
        document.querySelector("div.one").innerHTML =
            document.getElementsByClassName("num")[3].innerHTML;
        document.getElementsByClassName("price-total")[2].innerHTML =
            "$" +
            document.getElementsByClassName("num")[3].innerHTML * 125 +
            ".00";
    }

    if (fourthProduct == "block") {
        document.getElementsByClassName("num")[0].innerHTML =
            document.getElementsByClassName("num")[4].innerHTML;
        document.querySelector("div.one").innerHTML =
            document.getElementsByClassName("num")[4].innerHTML;
        document.getElementsByClassName("price-total")[3].innerHTML =
            "$" +
            document.getElementsByClassName("num")[4].innerHTML * 125 +
            ".00";
    }
}

function max_minNumItems() {
    for (let i = 1; i <= 4; i++) {
        if (document.getElementsByClassName("num")[i].innerHTML >= 5) {
            document.getElementsByClassName("num")[i].innerHTML = 5;
            document.querySelector("div.one").innerHTML = 5;
        }

        if (document.getElementsByClassName("num")[i].innerHTML <= 0) {
            document.getElementsByClassName("num")[i].innerHTML = 1;
        }
    }
}
