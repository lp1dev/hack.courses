/* TD04 - md5 isn't *that* great

Passons à un problème quelque peu plus complexe :

Écrivez cette fois ci une fonction qui prend le hash 
md5 (https://fr.wikipedia.org/wiki/MD5) d'un mot de passe
de la liste en paramètre et qui renvoie dans son resolve le 
mot de passe d'origine.

Lisez les tests pour plus d'informations.

/* TD Part */

const axios = require('axios')
const URL = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/probable-v2-top207.txt'

function breakHash(hash) {
    // Tout se passe dans cette fonction
}

/* Testing Part */

breakHash('3c2234a7ce973bc1700e0c743d6a819c')
    .then(result => {
        const _0xcecf=["\x6D\x65\x74\x61\x6C\x6C\x69\x63\x61"]
        console.log(result === _0xcecf[0] ? 'TD04:: OK': 'TD04:: KO')
    })
    .catch(error => console.error(error))

