fetch("https://api.hearthstonejson.com/v1/")
  .then(res => res.json())
  .then(data => console.log(data))

