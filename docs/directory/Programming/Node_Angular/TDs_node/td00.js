/* TD00 - On commence doucement

Le but de cet exercice est de terminer le script ci dessous qui permet 
de lister les dépendances du fichier package.json passé en paramètre.

La récupération du paramètre est déjà faite dans le script !

*/

/* TD Part */

function readPackageFile(file, callback) {
    const fileContent = {}
    // Ici on lit le contenu de {file} et
    // on le passe en paramètre de callback
    callback(fileContent)
}

function parsePackageFile(packageFileData) {
    const dependencies = {}
    // Ici on affiche et retourne un objet JavaScript contenant
    // les dépendances du projet ainsi que leur numéro de version
    console.log('parsePackageFile :: dependencies', dependencies)
    return dependencies
}

function usage() {
    console.log(`usage : ${process.argv[1]} [file]`)
    process.exit(0)
}

if (process.argv.length < 3) {
    return usage()
}

readPackageFile(process.argv[2], parsePackageFile)

/* Testing Part */

const mockPackage = {"name":"codesample","version":"1.0.0","description":"node classes codesamples","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"author":"Jeremie A <lp1.eu>","license":"MIT","dependencies":{"axios":"^0.18.0","express":"^4.16.4","ws":"^6.1.2"}}

if (!parsePackageFile(mockPackage) ||
    !(JSON.stringify(parsePackageFile(mockPackage)) == JSON.stringify(mockPackage['dependencies']))) {
    console.error('Test 00: KO')
    return
}
console.log('Test 00: OK')
