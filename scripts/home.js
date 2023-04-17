let metricNumbers = document.querySelectorAll(".metric-number");

window.addEventListener('scroll', metricAnimation);

function metricAnimation() {
    metricNumbers.forEach((valueDisplay) => {
        let viewportHeight = document.documentElement.clientHeight;
        let displayRect = valueDisplay.getBoundingClientRect();
        
        if (displayRect.top < viewportHeight && valueDisplay.innerHTML === "000") {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        
            // let duration = Math.floor(interval / endValue);
            let counter = setInterval(() => {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, 8);
        } else {
            return;
        }
    });
}