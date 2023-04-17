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