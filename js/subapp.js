



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


// Teljes URL lekérése
const currentURL = window.location.href;

// Aktuális oldal nevének lekérése
const currentPage = window.location.pathname.split('/').pop();

// Ellenőrzés, hogy melyik oldalon vagy
if (currentPage === 'bags.html') {
    var page = "bags";
} else if (currentPage === 'belt.html') {
    console.log('belts');
} else {
    console.log('Az aktuális oldal egyéb oldal');
}

console.log(page)






/* ----------- */
function createImageElements() {
    const galleryContainer = document.querySelector('.sub_product_container');
    const categories = ['bags', 'belts', 'wallets', 'other'];
    if (currentPage === 'bags.html') {
        for (let i = 1; i <= 3; i++) {
            var imgSrc = `../assist/products/${categories[0]}/${i}.jpg`;

            let title = "Táskák"

            // Létrehozunk egy új sub_product_content-box-t minden képhez
            const galleryContentBox = document.createElement('div');
            galleryContentBox.classList.add('sub_product_content-box');

            // A tartalom rész
            const content = `
            <div class="product_header-wrapper">
                <h3>${title}</h3>
            </div>
            <img src="${imgSrc}" alt="Product ${i}">
        `;

            // A tartalom hozzáadása a content-box-hoz
            galleryContentBox.innerHTML = content;

            // A content-box hozzáadása a konténerhez
            galleryContainer.appendChild(galleryContentBox);
        }
    } else if (currentPage === 'belt.html') {
        for (let i = 1; i <= 6; i++) {
            var imgSrc = `../assist/products/${categories[1]}/${i}.jpg`;

            let title = "Övek"

            // Létrehozunk egy új sub_product_content-box-t minden képhez
            const galleryContentBox = document.createElement('div');
            galleryContentBox.classList.add('sub_product_content-box');

            // A tartalom rész
            const content = `
            <div class="product_header-wrapper">
                <h3>${title}</h3>
            </div>
            <img src="${imgSrc}" alt="Product ${i}">
        `;

            // A tartalom hozzáadása a content-box-hoz
            galleryContentBox.innerHTML = content;

            // A content-box hozzáadása a konténerhez
            galleryContainer.appendChild(galleryContentBox);
        }

    } else if (currentPage === 'wallets.html') {
        for (let i = 1; i <= 7; i++) {
            var imgSrc = `../assist/products/${categories[2]}/${i}.jpg`;

            let title = "Pénztárcák"

            // Létrehozunk egy új sub_product_content-box-t minden képhez
            const galleryContentBox = document.createElement('div');
            galleryContentBox.classList.add('sub_product_content-box');

            // A tartalom rész
            const content = `
            <div class="product_header-wrapper">
                <h3>${title}</h3>
            </div>
            <img src="${imgSrc}" alt="Product ${i}">
        `;

            // A tartalom hozzáadása a content-box-hoz
            galleryContentBox.innerHTML = content;

            // A content-box hozzáadása a konténerhez
            galleryContainer.appendChild(galleryContentBox);
        }
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