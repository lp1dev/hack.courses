/* td03

Le but de ce TD est d'implémenter la fonction
"mul", qui prend deux paramètres (a et b) et
retourne le produit de ceux-ci.

*/

/* TD Part */

// À vous de rajouter votre fonction ici !

/* Testing Part */

const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

if (mul(a, b) == (a * b)) {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO')
}