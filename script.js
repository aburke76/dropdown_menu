const menuIcon = document.querySelector("#menu-icon");
const dots = document.querySelectorAll(".dot");
const pictureFrame = document.querySelector(".picture-frame");
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");
const images = document.querySelectorAll("img");
const slides = document.querySelector(".slides");

menuIcon.addEventListener("click", () => {
    toggleMenu();
});

nextBtn.addEventListener("click", () => {
    const shownImg = imgInFrame();
    shownImg.classList.toggle("hidden");

    if (shownImg.id == 7) {
        images[0].classList.toggle("hidden");
        dots[dots.length - 1].classList.toggle("fa-regular");
        dots[dots.length - 1].classList.toggle("fa-solid");
        dots[0].classList.toggle("fa-regular");
        dots[0].classList.toggle("fa-solid");
    } else {
        const next = parseInt(shownImg.id) + 1;
        images[next - 1].classList.toggle("hidden");
        changeDot(shownImg, 1);
    }
});

prevBtn.addEventListener("click", () => {
    const shownImg = imgInFrame();
    shownImg.classList.toggle("hidden");

    if (shownImg.id == 1) {
        images[images.length - 1].classList.toggle("hidden");
        dots[0].classList.toggle("fa-regular");
        dots[0].classList.toggle("fa-solid");
        dots[dots.length - 1].classList.toggle("fa-regular");
        dots[dots.length - 1].classList.toggle("fa-solid");
    } else {
        const prev = parseInt(shownImg.id) - 1;
        images[prev - 1].classList.toggle("hidden");
    }
    changeDot(shownImg, -1);
});

dots.forEach((dot) => {
    dot.addEventListener(() => {});
});

function imgInFrame() {
    let shownImg;
    images.forEach((img) => {
        if (!img.classList.contains("hidden")) {
            shownImg = img;
        }
    });
    return shownImg;
}

function toggleMenu() {
    if (dropdown.classList.value.includes("up")) {
        dropdown.classList.toggle("up");
        menuIcon.classList.remove("fa-solid", "fa-chevron-up");
        menuIcon.classList.add("fa-solid", "fa-chevron-down");
    } else {
        dropdown.classList.toggle("up");
        menuIcon.classList.remove("fa-solid", "fa-chevron-down");
        menuIcon.classList.add("fa-solid", "fa-chevron-up");
    }
}

function findDot() {
    let solidDot;
    dots.forEach((dot) => {
        if (dot.classList.contains("fa-solid")) {
            solidDot = dot;
        }
    });
    return solidDot;
}

function changeDot(img, num) {
    let nextDotId;

    if (img.id === findDot().dataset.id) {
        nextDotId = parseInt(findDot().dataset.id) + num;
        findDot().classList.toggle("fa-regular");
        findDot().classList.toggle("fa-solid");
        dots[nextDotId - 1].classList.toggle("fa-regular");
        dots[nextDotId - 1].classList.toggle("fa-solid");
    }
}
