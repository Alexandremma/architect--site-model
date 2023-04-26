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

// ********** CUSTOMIZED CAROUSEL JS
let currentItemIndex = 0
const carousel = document.getElementById("carousel");
const carouselContainer = document.getElementById("carousel-container");
const carouselItems = document.querySelectorAll(".carousel-container .carousel .carousel-item");
const carouselButtons = document.querySelectorAll(".carousel-container .carousel-button");

carouselButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log('carousel', carousel.offsetWidth);
        // carousel.scrollLeft = carousel.offsetWidth;
        console.log(carousel.scrollLeft);
        
        carouselItems.forEach((item) => {
            console.log('item', item.offsetLeft);
            item.classList.remove("current-item");
        });

        if (button.classList.contains("carousel-left-arrow")) {
            currentItemIndex--;

            if (currentItemIndex == 3) {
                console.log('CAROUSEL', carouselContainer.offsetWidth)
                carousel.scrollLeft -= 616 - ((carouselContainer.offsetWidth - 616) / 2);
            } else {
                carousel.scrollLeft -= 616;
            }
        } else {
            currentItemIndex++;

            if (currentItemIndex == 0) {
                carousel.scrollLeft = 0;
            }
            
            if (currentItemIndex == 1) {
                carousel.scrollLeft += 616 - ((carouselContainer.offsetWidth - 616) / 2);
            } else {
                carousel.scrollLeft += 616;
            }
        }

        if (currentItemIndex > carouselItems.length - 1) {
            carousel.scrollLeft = 0;
            currentItemIndex = 0;
        }
        
        if (currentItemIndex < 0) {
            carousel.scrollLeft = carousel.scrollWidth;
            console.log('width', carousel.scrollWidth)
            currentItemIndex = carouselItems.length - 1;
        }

        console.log('scroll left', carousel.scrollLeft)

        carouselItems[currentItemIndex].classList.add("current-item");
        // carousel.style.transform = `translateX(${-currentItemIndex * 600}px)`;

        // carouselItems[currentItemIndex].scrollIntoView({
        //     inline: "center",
        //     behavior: 'smooth',
        // });

        button.disabled = true;
    
        //Habilita novamente após dois segundos (2000) ms
        setTimeout(function(){
            button.disabled = !button.disabled;
        }, 700);
    })
})

// ********** MATERIALIZE CAROUSEL JS
// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.carousel');
    
//     let options = {
//         duration: 1000,
//         shift: 100,
//         fullWidth: true,
//         indicators: true,
//     }

//     let instances = M.Carousel.init(elems, options);
// });

//*********** ACCORDION JS
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelector('.carousel');
//     var options = {
//       fullWidth: true,
//       indicators: true
//     };
//     var instance = M.Carousel.init(elems, options);
// });


// const accordionItems = document.querySelectorAll(".accordion-list-item .accordion-item");

// accordionItems.forEach((accordionItem) => {
//     const accordionHeader = accordionItem.querySelector(".accordion-header")
//     const accordionContent = accordionItem.querySelector(".accordion-content");

//     accordionHeader.addEventListener("click", () => {
//         headerClick(accordionItem, accordionContent, accordionHeader);
//     });
// });

// function headerClick(accordionItem, accordionContent, accordionHeader) {
//     const accordionIcon = accordionHeader.querySelector(".accordion-icon");
//     console.log('accordionIcon', accordionIcon.innerHTML);
    
//     switch (accordionIcon.innerHTML) {
//         case '+':
//             accordionContent.classList.toggle("active");
//             accordionIcon.innerHTML = "-";
//             break;
//         case '-':
//             accordionContent.classList.toggle("active");
//             accordionIcon.innerHTML = "+";        
//             break;
//     }

//     // if (accordionIcon.innerHTML == "+") {
//     //     console.log('oi')
//     //     // accordionContent.style.maxHeight = "300px";
//     //     accordionContent.classList.toggle("active");
//     //     accordionIcon.innerHTML = "-";
//     // }
    
//     // if (accordionIcon.innerHTML != "+") {
//     //     console.log('olá')
//     //     // accordionContent.style.maxHeight = 0;
//     //     accordionContent.classList.toggle("active");
//     //     accordionIcon.innerHTML = "+";
//     // }
// }