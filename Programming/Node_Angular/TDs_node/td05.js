/* TD05 - Wrap Up

Il est maintenant temps de finaliser l'outil que
nous avons commencé à écrire et de le rendre plus facile à utiliser !

Écrivez un script qui trouve les mots de passes correspondants aux
hashs contenus dans le fichier passé en paramètre.

Vous trouverez dans ce dossier un fichier hashes.txt qui contient des hashs md5,
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

breakHashes('./hashes.txt')
    .then(passwords => {
        var _0x8361=["\x6C\x65\x74\x6D\x65\x69\x6E","\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x62\x6C\x69\x6E\x6B\x31\x38\x32","\x70\x6F\x6B\x65\x6D\x6F\x6E","\x73\x6C\x69\x70\x6B\x6E\x6F\x74","\x71\x77\x65\x72\x74\x79\x31\x32\x33","\x31\x32\x33\x34\x35\x36\x37\x38\x39\x30","\x30\x78\x30"];var _0xef13=[_0x8361[0]];(function(_0x4daax2,_0x4daax3){var _0x4daax4=function(_0x4daax5){while(--_0x4daax5){_0x4daax2[_0x8361[2]](_0x4daax2[_0x8361[1]]())}};_0x4daax4(++_0x4daax3)}(_0xef13,0x92));var _0xbeb2=function(_0x4daax7,_0x4daax8){_0x4daax7= _0x4daax7- 0x0;var _0x4daax9=_0xef13[_0x4daax7];return _0x4daax9};const success= JSON.stringify([_0x8361[3],_0x8361[4],_0x8361[5],_0x8361[6],_0x8361[7],_0xbeb2(_0x8361[8])]) == JSON.stringify(passwords)
        console.log(success ? 'TD05 :: OK' : 'TD05 :: KO')
    })
    .catch(error => console.error(error))
