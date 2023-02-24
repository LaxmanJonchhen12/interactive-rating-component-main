let thanksCard = document.getElementsByClassName("thanks-card");
let card = document.getElementsByClassName("card");
console.log(card);
let btn = document.getElementsByClassName("btn");
let submit = document.getElementById("submit");
let ratingValue= "";
let ratng = document.getElementById("rating");
for (let i = 0; i<btn.length; i++) {
	btn[i].addEventListener("click", () => {
		ratingValue= btn[i].textContent;
		console.log(ratingValue);
	})
}

submit.addEventListener("click", ()=> {
	card[0].classList.add("card-hide");
	thanksCard[0].classList.add("thanks-card-show");
	ratng.textContent = `You selected ${ratingValue} out of 5`;
})
