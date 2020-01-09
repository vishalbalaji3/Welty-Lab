const searchBar = document.querySelector('#myInput')
const list = document.querySelector('#projects')

searchBar.addEventListener('keyup', (e) => {
	const term = e.target.value.toLowerCase();
	const cardList = list.getElementsByClassName('card-body');
	console.log(cardList)
	var temp = Array.from(cardList)
	console.log(temp)

	Array.from(cardList).forEach(function(card){
		const title = card.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			card.parentElement.parentElement.style.display = 'block';
		} else {
			card.parentElement.parentElement.style.display = 'none';
		}
	});
});