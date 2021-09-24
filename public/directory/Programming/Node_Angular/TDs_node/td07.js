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

// GL;HF

/* Testing Part */

setTimeout(test, 1500)

const data = {
    hashes: `4a7d1ed414474e4033ac29ccb8653d9b
7c6a180b36896a0a8c02787eeafb0e4c
00bfc8c729f5d4d529a412b12c58ddd2
f9f3b5f3978c0c2c4663982c8e0e3c76
80ef61a9478f668711adb7df30543230
b99cc420eb25205168e83190bae48a12`.split('\n')
}

function test() {
    axios
        .post(`http://localhost:${PORT}/crack`, data)
        .then(response => console.log('response: ', response.data))
        .catch(e => console.error('TD07 :: KO', e))
}
