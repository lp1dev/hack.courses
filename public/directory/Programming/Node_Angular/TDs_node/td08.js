/* TD08 - Pareil mais un peu plus beau

Bravo si vous avez réussi le TD07 !
Si ce n'est pas le cas vous pouvez tout de 
même avancer un peu sur celui-ci !

Nous allons maintenant rendre notre WebService
un peu plus simple à utiliser en lui ajoutant 
une interface graphique plus facile à utiliser !

Jusqu'ici nous avons seulement renvoyé des données 
au format JSON avec notre serveur express.js,
mais express peut tout à fait être utilisé pour
servir de nombreux types de données
notamment du HTML et du CSS !

Le but de cd TD est d'afficher le HTML contenu dans
la constante template lorsque vous ouvrez l'url 
http://localhost:{PORT} dans votre navigateur !

/* TD Part */

const express = require('express')
const PORT = 8083
const app = express()

const template = `
<html>
<p>
Entrez ici la liste de hashs md5 que vous souhaitez casser.
</p>
<textarea></textarea>
<div>
<button>Démarrer</button>
</div>
</html>
`

app.get('/', (request, response) => {
    response.send(template)
})

app.listen(PORT)

/* Testing Part */

const axios = require('axios')

function test() {
    axios
        .get(`http://localhost:8083/`)
        .then(response => {
            console.log(response.data == template ? 'TD08 :: OK' : 'TD08 :: KO')
            console.log('Vous pouvez utiliser CTRL + C pour fermer le serveur')
        })
        .catch(e => console.error('TD08 :: KO', e))
}

test()
