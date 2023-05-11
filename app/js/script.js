const toggleMenu = document.querySelector("#toggleMenu");
const mobileMenu = document.querySelector("#mobileMenu");

toggleMenu.addEventListener("click", () => {
    if(toggleMenu.classList.contains("open")) {
        mobileMenu.classList.remove("fade-in");
        toggleMenu.classList.remove("open");
        mobileMenu.classList.add("fade-out");
    }else {
        mobileMenu.classList.remove("fade-out");
        toggleMenu.classList.add("open");
        mobileMenu.classList.add("fade-in");
    }
})