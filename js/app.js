window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollY = window.scrollY;

    if (scrollY > 80) {
        navbar.classList.add("scrolled");
       
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ---------------- */
// Function to create image elements and insert them into gallery content boxes
function createImageElements() {
    const galleryContainer = document.querySelector('.galery_container');

    for (let i = 1; i <= 20; i++) {
        const imgSrc = `./assist/products/${i}.jpg`; // Assuming the images are named image1.jpg, image2.jpg, ..., image20.jpg
        const galleryContentBox = document.createElement('div');
        galleryContentBox.classList.add('galery_content-box');

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = `Product ${i}`;

        galleryContentBox.appendChild(imgElement);
        galleryContainer.appendChild(galleryContentBox);
    }
}

// Call the function to create and insert image elements
createImageElements();


/* ------------------ */
// Feltételezzük, hogy a képek az 'img' osztályt használják
const images = document.querySelectorAll('.galery_content-box');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Képekre kattintás eseményfigyelő
images.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index + 1)); // index + 1, mert az index 0-tól kezdődik
});

// Lightbox megnyitása
function openLightbox(imageIndex) {
    const imgSrc = `./assist/products/${imageIndex}.jpg`; // Az aktuális kép elérési útja
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex'; // vagy 'block', ahogy az stílusodnak megfelel
    lightbox.style.visibility = "visible";
}

// Lightbox bezárása
function closeLightbox() {
    lightbox.style.display = 'none';
}




/*   Email send  */
contactForm = document.getElementById("contact-form");
statusBox = document.querySelector(".form__status-box p");
formInputs = document.querySelectorAll(".form__input");

/* ============== Contact Section ============== */
formInputs.forEach(input => {
    input.addEventListener("focus", () => {
        let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
        targetLabel.classList.add("focus");
    });
    input.addEventListener("blur", () => {
        let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
        if (input.value.length === 0)
            targetLabel.classList.remove("focus");
    });
});

/* ============== Send Email By EmailJS ============== */
const serviceID = "service_t8b2h45";
const templateID = "template_aa4hy22";
const templateParams = contactForm;
const publicKey = "83VPhLv_IQqpQzH-0";

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, templateParams, publicKey).then(response => {
        console.log(response.status, response.text);
        statusBox.textContent = "Az üzenetet sikeresen elküldtük! ✅"
        setTimeout(() => {
            statusBox.textContent = ""
        }, 3000);
        contactForm.reset();
        const labels = contactForm.querySelectorAll('.form__label');
        labels.forEach(label => {
            label.classList.remove('focus');
        });
    },
        (error) => {
            console.log(error);
            statusBox.textContent = "Az üzenetet nem sikerült elküldeni! ❌"
            setTimeout(() => {
                statusBox.textContent = ""
            }, 3000);
            contactForm.reset();
        }
    );
}

contactForm.addEventListener("submit", sendEmail)


/* ============== ScrollUp Button ============== */
const scrollUpBtn = document.querySelector(".scroll-up");
function showScrollUpBtn() {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.add("show");
    } else {
        scrollUpBtn.classList.remove("show");
    }
}

scrollUpBtn.addEventListener("click", () => window.scrollTo({ behavior: "smooth", top: 0, left: 0 }))

window.addEventListener("scroll", () => {

    showScrollUpBtn();

});

/* hamburger menu */
/* const hamburgerIcon = document.querySelector(".open-menu-btn");
const menuOpen = document.querySelector(".container")
const menuClose = document.querySelector(".header-button")

function openMenu (){
    hamburgerIcon.addEventListener('click' , () => {
        menuOpen.style.display = "flex";
menuClose.style.display = " none";
    })
}
openMenu(); */
/* ------------- */
const menu = document.querySelector(".container");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuLinks = document.querySelectorAll(".menu-link"); /*minden linknek van egy ilyen osztélya */

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open"); /* ez hozzáadja aklasszt */
        menu.style.transition = "transform .25s ease"; /* ez az átmenetettempóját szabájozza */
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
