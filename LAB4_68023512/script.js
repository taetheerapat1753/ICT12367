const modal = document.querySelector(".modal");
const fullImage = document.querySelector(".full-image");
const images = document.querySelectorAll(".img-container img");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("open");
        fullImage.src = img.src;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target !== fullImage) {
        modal.classList.remove("open");
    }
});