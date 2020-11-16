/* TD03 - Yup. We are

Maintenant que vous avez réussi à récupérer ce fichier
nous allons nous en servir plus intelligement !

Ce fichier est un dictionnaire de mots de passe, 
ce sont les 207 mots de passe les plus utilisés 
(selon plusieurs bases de données).

Terminez ce script qui vérifie pour un mot de 
passe donné sa position dans le dictionnaire de mots de passe.

/* TD Part */

const axios = require('axios')
const URL = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/probable-v2-top207.txt'

function checkPosition(password) {
    return new Promise((resolve, reject) => {
        const position = 0
        resolve(position)
    })
}

/* Testing Part */

checkPosition('passw0rd')
    .then(position => {
        console.log(position == 119 ? 'TD03: OK' : 'TD03: KO')        
    })
    .catch(error => console.error(error))

