const typedTextEl = document.querySelector(".typed-text");
const cursorEl = document.querySelector(".cursor");
const mainTitleEl = document.querySelector(".main-title");

const textArray = ['Observations', 'Opinions', 'Experiences', 'BlogSpot']
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorEl.classList.contains("typing")) cursorEl.classList.add("typing");
        typedTextEl.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        //erase
        cursorEl.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0 && textArrayIndex !== 3) {
        if (!cursorEl.classList.contains("typing")) cursorEl.classList.add("typing");
        //remove last char in arr by substring starting from index 0 to charIndex-1
        typedTextEl.textContent = textArray[textArrayIndex].substring(0, charIndex -1)

        //reduce index by 1
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else if (textArrayIndex === 3) {
        typedTextEl.innerText = "BlogSpot."
        cursorEl.classList.add("typing");
        cursorEl.setAttribute("style", "background-color: transparent;");
        
    }
    else {
        cursorEl.classList.remove("typing");
        //type
        textArrayIndex++;
        if (textArrayIndex>= textArray.length)
        textArrIndex=0;

        setTimeout(type, typingDelay + 500)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
    GiDrippingGoo(props)
    //type ();
})
