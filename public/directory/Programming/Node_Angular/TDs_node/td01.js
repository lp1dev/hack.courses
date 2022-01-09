/* TD01 - Lines Count

Le but de cet exercice est de terminer ce 
script qui compte (affiche et retourne) 
le nombre de lignes du fichier passé en paramètre

/* TD Part */

const fs = require('fs')

function countLines(error, fileContent) {
    if (!error) {
        const lines = 0
        // Compter ici le nombre de lignes dans fileContent
        return lines
    }
    console.error(error)
}

function loadFileContent(filename, callback) {
    // Lire le contenu de filename et le passer
    // en paramètre dans callback
    callback()
}

function usage() {
    console.log(`usage : ${process.argv[1]} [filename]`)
    return 0
}
if (process.argv.length < 3) {
    return usage()
}

loadFileContent(process.argv[2], countLines)

/* Testing Part */

const mockFile = `
123456
password
123456789
12345678
12345
qwerty
123123
111111
abc123
1234567`

console.log(countLines(null, mockFile) == 11 ? 'TD01: OK' : 'TD01: KO')
