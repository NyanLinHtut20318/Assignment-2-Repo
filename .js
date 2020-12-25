fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7f3858e219msh928ae11832ce33dp1e8daejsn8d6dafdb99b3",
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
