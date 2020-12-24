fetch("https://api.hearthstonejson.com/v1/68600/enUS/cards.json")
  .then(res => {
    if (res.ok) {
      console.log('SUCCESS')
    } else {
      console.log('NOT SUCCESSFUL')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))

