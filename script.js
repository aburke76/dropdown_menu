const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    if (dropdown.classList.value.includes("hidden")) {
        dropdown.classList.toggle("hidden");
        menuIcon.classList.remove("fa-solid", "fa-chevron-up");
        menuIcon.classList.add("fa-solid", "fa-chevron-down");
    } else {
        dropdown.classList.toggle("hidden");
        menuIcon.classList.remove("fa-solid", "fa-chevron-down");
        menuIcon.classList.add("fa-solid", "fa-chevron-up");
    }
}

function pictureRight() {}
function pictureLeft() {}
function choosePicture() {}
