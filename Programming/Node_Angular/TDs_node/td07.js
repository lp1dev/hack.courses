/* TD07 - Cracker As a Service

Maintenant que nous savons utiliser express pour 
écrire des services web et que nous avons écrit
un premier outil d'attaque par dictionnaire
sur des hashs MD5 (TDs 04-05), 
pourquoi ne pas écrire un WebService permettant
de casser des hashs MD5 (comme https://crackstation.net par exemple) ?

Le test réalisé est simple : 
Une requête POST est faite sur la route /crack 
avec une liste de hashs passée en paramètre.

Le retour attendu est une liste de mots de passe 
en clair correspondant aux hashs envoyés.

ATTENTION : Cette fois-ci les mots de passe utilisés
sont plus complexes et une liste de mots 
de passe plus conséquente doit être utilisée,
je recommande cette liste (qui contient les hashs testés) :

https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt

Et globalement, si ça vous intéresse gardez ce dépot GitHub dans vos favoris.
Il contient BEAUCOUP de ressources utiles concernant la sécurité informatique 
https://github.com/danielmiessler/SecLists !

Astuces : 

- Le body de votre requête est undefined ?! -> https://github.com/expressjs/body-parser
- Les échanges entre axios et express se font en JSON dans le contexte de ce script

/* TD Part */

// You're on your own this time

/* Testing Part */

const data = {
    hashes: [
        '8ddcff3a80f4189ca1c9d4d902c3c909',
        '3fc0a7acf087f549ac2b266baf94b8b1',
        '4b9fd29cbfe8baffeb8d331a8cc5bcf2',
        '11aad936ee5aab81953eee2e59fda247',
        '68da3c8820f5cf217ae41b59abf1ff44',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '2fdd64782b4169e3c42c6a88a47faa78',
        '65d671ec9787b32cfb7e33188be32ff7',
        'e5dd2ae16b3c635f59fd329f0e735718'
    ]
}

axios
    .post(`http://localhost:${PORT}/crack`, data)
    .then(response => console.log('response: ', response.data))
    .catch(e => console.error('TD07 :: KO', e))
