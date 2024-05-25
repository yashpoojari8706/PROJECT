let slideIndex = 0;
let slideInterval;
let slides = document.getElementsByClassName("slide");

function plusSlides(n) {
    let newSlideIndex = slideIndex + n;

    if (newSlideIndex >= slides.length) {
        slideIndex = 0;
    } else if (newSlideIndex < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = newSlideIndex;
    }

    showSlides();
}

function showSlides() {
    let slidePosition = -slideIndex * 33.333; 
    document.querySelector(".slides").style.transform = `translateX(${slidePosition}%)`; 

    updateDots();
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000); 
}

function stopSlideShow() {
    clearInterval(slideInterval); 
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); 
    startSlideShow(); 
    createDots(); 
});

let isPaused = false;

function togglePause() {
    if (isPaused) {
        isPaused = false;
        startSlideShow();
        document.querySelector(".pause").innerHTML = '<i class="fas fa-pause"></i>'; 
    } else {
        isPaused = true;
        stopSlideShow(); 
        document.querySelector(".pause").innerHTML = '<i class="fas fa-play"></i>'; 
    }
}

function createDots() {
    let dotsContainer = document.querySelector(".dots");

    dotsContainer.innerHTML = '';

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", `currentSlide(${i + 1})`);
        dotsContainer.appendChild(dot);
    }

    updateDots();
}

function updateDots() {
    let dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === slideIndex) {
            dots[i].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".feature").forEach(feature => {
        observer.observe(feature);
    });
});