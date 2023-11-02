const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

let currentIndex = 0;

function showImage(index) {
    lightboxContent.src = galleryItems[index].src;
    currentIndex = index;
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        lightbox.style.display = "block";
        showImage(index);
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
