
function fetchData() {
	fetch("https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USRi5itcek9kug6foOvn9H7b0coICJLqgC")
	.then((response) => {
		console.log(response);
		if (!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	})
	.then((data) =>{
		console.log(data);
		const html = data.cards
		  .map(user => {
			  return `
			  <div>
			    <p><img src="${user.image}" alt="${user.name}" /></imga></p>
			  </div>
			  `;
		  })
		  .join("");;
		document.querySelector("#allCards").innerHTML = html
	})
	.catch(err => {
		console.error(err);
	});
}
const searchBar = document.getElementById("searchBar");
let cardNames = [];
console.log(searchBar);
searchBar.addEventListener("keyup", (x) =>{
	const searchString = x.target.value;
	const filteredNames = cardNames.filter((name) => {
		return (
			cards.name.includes(searchString)
		);
	});
	console.log(filteredNames);
});
fetchData()
