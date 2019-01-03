/* TD04 - Listes chaînées

Nous allons maintenant travailler
sur des structures de données que 
vous avez peut-être déjà implémentées
dans d'autres langages.

TypeScript est particulièrement 
approprié pour de nombreuses structures
et opérations sur des données comme c'est
un langage qui malgrè sa flexibilité 
possède un puissant système de typage.

Le but de cet exercice est de créer une
petite liste chainée comportant 3 cellules
ayant pour valeur (dans l'ordre) :
42, 43 et 43.

https://fr.wikipedia.org/wiki/Liste_cha%C3%AEn%C3%A9e

*/

/* TD Part */



/* Testing Part */

function test04(cell: Cell) {
    if (cell.next.value === 43 &&
        cell.value === 42 &&
        cell.next.next.value === 44 &&
        cell.next.next.next === null) {
        console.log('TD04 :: OK');
        return;
    }
    console.log('TD04 :: KO');
}
