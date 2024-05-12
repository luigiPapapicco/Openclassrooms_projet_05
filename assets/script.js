const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des eventListener sur les flèches
const left_btn = document.querySelector(".arrow_left");
const leftClicked = left_btn.addEventListener("click", (event) => {
	console.log("J'ai cliqué sur ma fleche gauche");
})
const right_btn = document.querySelector(".arrow_right");
const rightClicked = right_btn.addEventListener("click", (event) => {
	console.log("J'ai cliqué sur ma fleche droite");
})


// récupération du la class parent qui acceuillera mes bulletts
const divDots = document.querySelector(".dots");
// Ajouter des points (buletts) pour chaque slide
for (let i = 0; i < slides.length; i++) {
    const divDot = document.createElement("div");
    divDot.classList.add("dot");
	if (i === 0) {
		divDot.classList.add("dot_selected"); // ma première iterration ajoute également la classe "dot_selected"
	}
    divDots.appendChild(divDot);
}

// Récupérer toutes les classe ".dot" (buletts)
const buletts = document.querySelectorAll(".dot");


// Fonction pour mettre à jour le chemin d'image
function updateImagePath(imageName) {
	return "./assets/images/slideshow/" + imageName; // concaténation du chemin au lien présent dans le tableau
}

// Fonction pour mettre à jour l'affichage selon l'index du slide
function updateSlide(index) {
	const slide = slides[index]; // récup de l'index pour link l'image du tableau "slide"
    const slideImage = document.querySelector(".banner-img"); // recup du parent pour la maj de l <img>
    const slideTagLine = document.querySelector("#banner > p"); // redup du parent pour la maj du <p>

    slideImage.src = updateImagePath(slide.image); // maj de la source avec l'appel de la fonction updateImagePath
    slideTagLine.innerHTML = slide.tagLine; // maj du paragraphe avec la parti tagLine du dictionnaire

    // Mettre à jour le pointeur actif
    buletts.forEach((dot, i) => { //pour chaque iterration sur la collectionn de bullet
        if (i === index) { // si est strictement égale a l'index en cours
            dot.classList.add("dot_selected"); // alors on ajoute la classe "dot_selected"
        } else {
            dot.classList.remove("dot_selected"); // sinon on la supprime
        }
    });
}

// Index du slide actuellement affiché
let currentSlideIndex = 0;


right_btn.addEventListener("click", () => { // Au clic sur la flèche droite
    currentSlideIndex++; // indexEncour incrémenter de 1
    if (currentSlideIndex >= slides.length) { //si indexEncour est supérieur ou égale a la longueur du dictionnaire
        currentSlideIndex = 0; //alors indexEncour repasse a zero
    }
    updateSlide(currentSlideIndex); //on appelle la fonction avec pour paramètre la valeur de l'index
});

// Au clic sur la flèche gauche, passer au slide suivant
left_btn.addEventListener("click", () => {
    currentSlideIndex--; // indexEncour décrementer de 1
    if (currentSlideIndex < 0) { // si indexEncour est inferieur a 0 
        currentSlideIndex = slides.length - 1; // alors indexEncour egal a la longueur du dictionnaire - 1
    }
    updateSlide(currentSlideIndex);
});