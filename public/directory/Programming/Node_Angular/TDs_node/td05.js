/* TD05 - Wrap Up

Il est maintenant temps de finaliser l'outil que
nous avons commencé à écrire et de le rendre plus facile à utiliser !

Écrivez un script qui trouve les mots de passes correspondants aux
hashs contenus dans le fichier passé en paramètre.

Vous trouverez dans ce dossier un fichier hashes-1.txt qui contient des hashs md5,
utilisez-le pour tester votre script. 

C'est celui-ci qui est utilisé dans les tests.

Astuce : Les constantes pré-définies dans le TD peuvent vous aider

/* TD Part */

const fs = require('fs')
const axios = require('axios')
const md5 = require('md5')
const URL = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/probable-v2-top207.txt'

function breakHashes(hashes_file) {
    return new Promise((resolve, reject) => {
    })
}

function usage() {
    console.log(`usage : ${process.argv[1]} [hashes file]`)
    return 0
}

if (process.argv.length < 3) {
    return usage()
}

breakHashes(process.argv[2])
    .then(p => console.log('Found passwords :', p))
    .catch(e => console.error(e))

/* Testing Part */

breakHashes('./hashes-1.txt')
    .then(passwords => {
        const success = !(passwords.find(p => p.length == 32))
        console.log(success ? 'TD05 :: OK' : 'TD05 :: KO')
    })
    .catch(error => console.error(error))
