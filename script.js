fetch("https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USdBW2W6eVe6YXGuQCgv86WTx0eHg8n5Hk")
.then((response) => {
	return response.json();
})
.then((data) =>{
	var Card = data.cards;
	console.log(Card);
}
)
.catch(err => {
	console.error(err);
});
	
