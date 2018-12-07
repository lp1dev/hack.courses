const axios = require('axios')

axios
    .get('https://hack.courses')
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
