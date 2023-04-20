const subMenuDropdownItem = document.getElementById("subMenuDropdownItem");
const dropdownMenu = document.getElementById("dropdownMenu");

const mobileMenuLink = document.getElementById("mobile-menu-item-link");
const mobileSubMenu = document.getElementById("mobile-sub-menu");

const mobileMenuIcon = document.getElementById("mobile-open-menu-icon");

subMenuDropdownItem.addEventListener('mouseover', (event) => {
    dropdownMenu.style.overflow = 'visible';
    dropdownMenu.style.maxHeight = '150px';
});

subMenuDropdownItem.addEventListener('mouseout', (event) => {
    dropdownMenu.style.maxHeight = '0';
    dropdownMenu.style.overflow = 'hidden';
});

dropdownMenu.addEventListener('mouseover', (event) => {
    dropdownMenu.style.overflow = 'visible';
    dropdownMenu.style.maxHeight = '150px';
});

dropdownMenu.addEventListener('mouseout', (event) => {
    dropdownMenu.style.maxHeight = '0';
    dropdownMenu.style.overflow = 'hidden';
});

mobileMenuLink.addEventListener('click', (event) => {
    mobileSubMenu.classList.toggle('mobile-sub-menu-appear');
    // mobileSubMenu.style.overflow = 'visible';
    // mobileSubMenu.style.maxHeight = '500px'
})

function loadingPage() {
    let preloadElement = document.getElementById("preload");
    let loadedElement = document.getElementById("loaded");

    // setTimeout(() => {
        preloadElement.style.display = "none";
        loadedElement.style.display = "block";
    // }, 5000);
}

function openMobileMenu() {
    if (mobileMenuIcon.classList.contains("fa-bars")) {
        mobileMenuIcon.classList.remove("fa-bars");
        mobileMenuIcon.classList.add("fa-xmark");
    } else {
        mobileMenuIcon.classList.remove("fa-xmark");
        mobileMenuIcon.classList.add("fa-bars");
    }

    let mobileMenu = document.getElementById("mobile-menu");
    // mobileMenu.style.display = "block";
    // mobileMenu.style.maxHeight = "500px";
    mobileMenu.classList.toggle("active");
}