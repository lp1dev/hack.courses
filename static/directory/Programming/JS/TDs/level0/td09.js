/* td09 - Bissextile

Le but de ce dernier TD du level0 est d'implémenter
la fonction leap(year).

Cette fonction prend une année en paramètre, et 
retourne true si l'année passé en paramètre est bissextile.
Sinon, false sera retourné !

Pour rappel, une année est bissextile si elle est :
- divisible par 4 et non divisible par 100 OU
- divisible par 400

*/

/* TD Part */



/* Testing Part */
const years = [2019, 2020, 2021, 2022, 2023, 2024]
try {
    const result = years.map(y => leap(y))
    if (result.join() == [false, true, false, false, false, true].join()) {
        console.log('TD09:: OK')
    } else {
        console.log('TD09:: KO')
    }
} catch(e) {
    console.log('TD09:: KO');
}