/* TD02 - We're up to something, aren't we ?

Le but de cet exercice est de compter 
le nombre de lignes d'un fichier disponible 
en ligne (correspondant à URL).

/* TD Part */

const axios = require('axios')
const URL = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/probable-v2-top207.txt'

function countLines() {
    const lines = 0
    return lines
}

/* Testing Part */

console.log(countLines() == 207 ? 'TD02: OK' : 'TD02: KO')
