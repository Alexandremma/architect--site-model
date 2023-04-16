// SERVICE MENU INTERACTION
const menuItems = document.querySelectorAll(".aside-menu-content .aside-menu-item");

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        menuItems.forEach((item) => {
            item.classList.remove("aside-menu-highlight");
        });

        menuItem.classList.add("aside-menu-highlight");
    });
});

// ********** CAROUSEL JS
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    
    let options = {
        duration: 1000,
        shift: 100,
        fullWidth: true,
        indicators: true,
    }

    let instances = M.Carousel.init(elems, options);
});

//*********** ACCORDION JS
const accordionItems = document.querySelectorAll(".accordion-list-item .accordion-item");

accordionItems.forEach((accordionItem) => {
    const accordionHeader = accordionItem.querySelector(".accordion-header")
    const accordionContent = accordionItem.querySelector(".accordion-content");

    accordionHeader.addEventListener("click", () => {
        headerClick(accordionItem, accordionContent, accordionHeader);
    });
});

function headerClick(accordionItem, accordionContent, accordionHeader) {
    const accordionIcon = accordionHeader.querySelector(".accordion-icon");
    console.log('accordionIcon', accordionIcon.innerHTML);
    
    switch (accordionIcon.innerHTML) {
        case '+':
            accordionContent.classList.toggle("active");
            accordionIcon.innerHTML = "-";
            break;
        case '-':
            accordionContent.classList.toggle("active");
            accordionIcon.innerHTML = "+";        
            break;
    }

    // if (accordionIcon.innerHTML == "+") {
    //     console.log('oi')
    //     // accordionContent.style.maxHeight = "300px";
    //     accordionContent.classList.toggle("active");
    //     accordionIcon.innerHTML = "-";
    // }
    
    // if (accordionIcon.innerHTML != "+") {
    //     console.log('olá')
    //     // accordionContent.style.maxHeight = 0;
    //     accordionContent.classList.toggle("active");
    //     accordionIcon.innerHTML = "+";
    // }

}