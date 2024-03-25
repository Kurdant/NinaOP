const slides = [
    {
        "image":"./assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash.webp",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash.webp",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash.webp",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    }
];

const Fleche_gauche = document.querySelector(".arrow_left");
const Fleche_droite = document.querySelector(".arrow_right");
const imageContainer = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");

Fleche_gauche.addEventListener("click", () => changeSlide("gauche"));
Fleche_droite.addEventListener("click", () => changeSlide("droite"));

let count = 0;

// Add this line after declaring the 'dots' variable
window.addEventListener('DOMContentLoaded', (event) => {
    // Set the initial slide and dot state
    changeSlide("initial");
});

function changeSlide(direction) {
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    imageContainer.style.transition = "transform 0s"; // Désactiver la transition temporairement

    if (direction === "gauche") {
        count--;
        if (count < 0) {
            count = slides.length - 1;
        }
        imageContainer.style.transform = "translateX(-100%)"; // Déplacer l'image actuelle hors de l'écran à gauche
        setTimeout(() => {
            const slide = slides[count];
            imageContainer.src = slide.image; // Changer l'image
            imageContainer.style.transition = "transform 0.4s ease-in-out"; // Réactiver la transition
            imageContainer.style.transform = "translateX(0)"; // Faire glisser la nouvelle image sur l'écran
        }, 50); // Attendre un court instant avant de changer l'image pour permettre à l'image de sortir de l'écran
    } else if (direction === "droite") {
        count++;
        if (count === slides.length) {
            count = 0;
        }
        imageContainer.style.transform = "translateX(100%)"; // Déplacer l'image actuelle hors de l'écran à droite
        setTimeout(() => {
            const slide = slides[count];
            imageContainer.src = slide.image; // Changer l'image
            imageContainer.style.transition = "transform 0.4s ease-in-out"; // Réactiver la transition
            imageContainer.style.transform = "translateX(0)"; // Faire glisser la nouvelle image sur l'écran
        }, 50); // Attendre un court instant avant de changer l'image pour permettre à l'image de sortir de l'écran
    } else if (direction === "initial") {
        count = 0;
    }

    dots[count].classList.add("dot_selected");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeSlide(index);
        });
    });
}



