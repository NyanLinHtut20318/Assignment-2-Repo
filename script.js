const searchBar = document.getElementById("searchBar"); 
console.log(searchBar);
let searchNames = [
	fetch("https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USRi5itcek9kug6foOvn9H7b0coICJLqgC")
	.then((response) => {
		console.log(response);
		if (!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	})
	.catch(err => {
		console.error(err);
	})
];
searchBar.addEventListener("keyup", (x) =>{
	const searchString = x.target.value;
	const filteredNames = searchNames.filter((name) => {
		return (
			cards.name.includes(searchString)
			);
		});
	console.log(filteredNames);
    });
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

fetchData()
