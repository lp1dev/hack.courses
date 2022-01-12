/* TD02 - We're up to something, aren't we ?

Le but de cet exercice est de compter de manière
asynchrone le nombre de lignes d'un fichier disponible 
en ligne (correspondant à URL).

/* TD Part */

const axios = require('axios')
const URL = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/probable-v2-top207.txt'

function countLines() {
}

/* Testing Part */

countLines()
    .then(lines => {
        console.log(lines == 208 ? 'TD02: OK' : 'TD02: KO')
    })
    .catch(e => console.error(e))
