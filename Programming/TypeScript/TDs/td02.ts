/* TD02 - Pawn stars

Le but de cet exercice est de créer une
classe Pawn pour un jeu de dâmes.
Chaque pion possède une position en x et y
et doit pouvoir se déplacer
(il n'est pas nécessaire de vérifier 
les déplacements) avec la méthode move(x, y).

*/

/* TD Part */

/* Testing Part */
function test02() {
    const p = new Pawn(0, 0);
    if (typeof (p.move) === 'function') {
        if (p.x === p.y && p.x === 0) {
            p.move(5, 3);
            if (p.x === 5 && p.y === 3) {
                console.log('TD02 :: OK');
                return;
            }
        }
    }
    console.log('TD02 :: KO');
}

test02();