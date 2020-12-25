fetch("https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=USeF28PwwtmKTHiUNGJjr8ONG99Vo32Bu3")
	
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});