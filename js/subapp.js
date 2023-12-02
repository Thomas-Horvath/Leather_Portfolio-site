/* ============== ScrollUp Button ============== */
const scrollUpBtn = document.querySelector(".scroll-up");
function showScrollUpBtn() {
    if (window.scrollY > 100) {
        scrollUpBtn.classList.add("show");
    } else {
        scrollUpBtn.classList.remove("show");
    }
}

scrollUpBtn.addEventListener("click", () => window.scrollTo({ behavior: "smooth", top: 0, left: 0 }))

window.addEventListener("scroll", () => {
   
    showScrollUpBtn();
   
});

/* ----------- */
function createImageElements() {
    const galleryContainer = document.querySelector('.product_container');

    for (let i = 1; i <= 20; i++) {
        const imgSrc = `./assist/products/${i}.jpg`; // Assuming the images are named image1.jpg, image2.jpg, ..., image20.jpg
        const galleryContentBox = document.createElement('div');
        galleryContentBox.classList.add('sub_product_content-box');

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = `Product ${i}`;

        galleryContentBox.appendChild(imgElement);
        galleryContainer.appendChild(galleryContentBox);
    }
}

createImageElements();

/* -------- */
const menu = document.querySelector(".container");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuLinks = document.querySelectorAll(".menu-link"); /*minden linknek van egy ilyen osztélya */

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open"); /* ez hozzáadja aklasszt */
        menu.style.transition = "transform 0.5s ease"; /* ez az átmenetettempóját szabájozza */
    });
});

/* a memu-link osztályú elemeken végig megyünk és valamelyiknél van egy klikk esemény akkor amenuről levesszük a open klasszt.
így ha amneüre kattintunk akkor összecsukódik a hamburger menü */
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open"); // Az összecsukás a linkre kattintáskor történik
    });
});

/* ezzel a transition átmenet végeztével mindig leveszi a style tulajdonságot.
ez azért kell hogy ha keskenyítem az oldalt a töréspontnál(991px) ne ugráljun a menü!! */
menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
});