const menuIcon = document.querySelector("#menu-icon");
const dots = document.querySelectorAll(".dot");
const picInFrame = document.querySelector(".show");
const pictureFrame = document.querySelector(".picture-frame");
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");
const images = document.querySelectorAll("img");

menuIcon.addEventListener("click", () => {
    toggleMenu();
});

nextBtn.addEventListener("click", () => {
    images.forEach((img, index) => {
        if (!img.classList.contains("hidden")) {
            img.classList.toggle("hidden");
            // console.log(images[index + 1].classList);
            images[index + 1].classList.toggle("hidden");
        }
    });
    //     for (let i = 0; i < images.length; i++) {
    //         if (!images[i].classList.contains("hidden")) {
    //             images[i].classList.toggle("hidden");
    //             pictureFrame.remove(images[i]);
    //             console.log(images[i + 1].classList);
    //             images[i + 1].classList.toggle("hidden");
    //         }
    //     }
});

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
