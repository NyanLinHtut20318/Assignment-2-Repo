const searchBox = document.querySelector(".searchBox");
const inputBox = searchBox.querySelector("input");
function fetchData() {
	fetch("https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USojuA9puBi0DbtTzyHbZAZwai3I5AEOdQ")
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
inputBox.onkeyup = (e)=>{
	let userData = e.target.value;
	console.log(userData);

}