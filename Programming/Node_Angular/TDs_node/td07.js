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
    hashes: `2f8e193c39c4f1eedb68fa2947246cc7
b80a3f1ac659c52f8c54224483825f6b
f0c4b1d78649bcec257223e80e896086
067a19b34a0be782c09c6aae42921ddf
7c9b277e0893fc9234cfa5a642e29d80
33cbcd797b50f5f79f455e6d2799290e
2bccf72221e50686191fd76423e58ad0`.split('\n')
}

axios
    .post(`http://localhost:${PORT}/crack`, data)
    .then(response => console.log('response: ', response.data))
    .catch(e => console.error('TD07 :: KO', e))
