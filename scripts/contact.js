//*********** ACCORDION JS
const accordionItems = document.querySelectorAll(".accordion-list-item .accordion-item");

accordionItems.forEach((accordionItem) => {
    const accordionHeader = accordionItem.querySelector(".accordion-header")
    const accordionContent = accordionItem.querySelector(".accordion-content");

    accordionHeader.addEventListener("click", () => {
        headerClick(accordionItem, accordionHeader, accordionContent);
    });
});

function headerClick(accordionItem, accordionHeader, accordionContent) {
    let accordionIcon = accordionHeader.querySelector(".accordion-icon").innerHTML == '+' ? '+' : '-';
    
    accordionItems.forEach((accordionItemIntern) => {
        if (accordionItem == accordionItemIntern) return;
        let accordionInternContent = accordionItemIntern.querySelector(".accordion-content");
        let accordionInternIcon = accordionItemIntern.querySelector(".accordion-icon");
        accordionInternContent.classList.remove("active");
        accordionInternIcon.innerHTML = "+";
    });

    console.log(accordionIcon);

    switch (accordionIcon) {
        case '+':
            console.log('+');
            accordionContent.classList.toggle("active");
            accordionIcon = "-";
            break;
        case '-':
            console.log('-');
            accordionContent.classList.toggle("active");
            accordionIcon = "+";
            break;
        default: 
            return;
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