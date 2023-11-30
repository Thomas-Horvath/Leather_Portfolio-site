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