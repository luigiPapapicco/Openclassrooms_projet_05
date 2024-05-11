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
//  variable récupérant ma liste de boutons
let listBtns = document.querySelectorAll(".arrow");
// console.log(listBtns);
// boucle avec un addEventlistener opérant sur chaque bouton

for (let i=0; i < listBtns.length; i++) {
	let btnActuel = listBtns[i];

	btnActuel.addEventListener("click", (event) => {
		// verifie si je clique sur la class arrow_lef, si c'est le cas alors classDiv prend la valeur fleche gauche sinon elle prend la valeur fleche droite.
		let classDiv = event.currentTarget.classList.contains("arrow_left") ? "fleche_gauche" : "fleche_droite";
		console.log(`J'ai cliqué sur la classe : ${classDiv}`)
	})
} 