function loadingPage() {
    let preloadElement = document.getElementById("preload");
    let loadedElement = document.getElementById("loaded");

    // setTimeout(() => {
        preloadElement.style.display = "none";
        loadedElement.style.display = "block";
    // }, 5000);
}

function openMobileMenu() {
    let mobileMenu = document.getElementById("mobile-menu");
    // mobileMenu.style.display = "block";
    // mobileMenu.style.maxHeight = "500px";
    mobileMenu.classList.toggle("active");
}