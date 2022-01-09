/* TD06 - WebServices

Passons à autre chose pour ce TD, 
nous allons maintenant prendre express.js en main !

Le but de ce script est de créer un serveur HTTP express qui
écoute sur le port 8083 et renvoie le texte "Hello World" 
avec un status code de 200 sur sa route "/".

Astuce : Il y a un peu de recherche à faire sur la doc express : https://expressjs.com/fr/api.html
Ne cherchez pas une solution complexe.

/* TD Part */

const express = require('express')
const PORT = 8083
const app = express()

/* Testing Part */

const axios = require('axios')

setTimeout(test, 500)

function test() {
    axios
        .get(`http://localhost:${PORT}`)
        .then(response => {
            console.log(response.data === 'Hello World' ? 'TD06 :: OK' : 'TD06 :: KO')
            console.log('Vous pouvez fermer le serveur avec CTRL + C')
        })
        .catch(e => console.error('TD06 :: KO'))
}
