window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header");
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
        const imgSrc = `../assist/products/${i}.jpg`; // Assuming the images are named image1.jpg, image2.jpg, ..., image20.jpg
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
const images = document.querySelectorAll('.galery_content-box img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Képekre kattintás eseményfigyelő
images.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index + 1)); // index + 1, mert az index 0-tól kezdődik
});

// Lightbox megnyitása
function openLightbox(imageIndex) {
    const imgSrc = `../assist/products/${imageIndex}.jpg`; // Az aktuális kép elérési útja
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex'; // vagy 'block', ahogy az stílusodnak megfelel
    lightbox.style.visibility= "visible"; 
}

// Lightbox bezárása
function closeLightbox() {
    lightbox.style.display = 'none';
}
