/* TD03 - Pawn++

Le but de cet exercice est de créer les classes
Pawn, King, Queen, Rook et Bishops correspondant
aux pièces d'un jeu d'échec.

Chaque pièce devra avoir un type, qui sera un
nombre correspondant à :

0 : Pawn
1 : King
2 : Queen
3 : Rook
4 : Bishop

Chacune de ces pièce devra pouvoir se déplacer
avec la méthode move(x, y) et sera initialisée
avec un x et un y.
(il n'est pas nécessaire de vérifier les déplacements).

*/

/* TD Part */


/* Testing Part */

function test03() {
    let passed = 0;
    const p = new Pawn(1, 1);
    if (p.x === 1 && p.y === 1 && p.type === 0) {
        passed++;
        const k = new King(2, 2);
        k.move(p.x, p.y);        
        if (k.x === 1 && k.y === 1 && k.type === 1) {
            passed++;
            const q = new Queen(3, 3);
            q.move(k.x, k.y);
            if (q.x === 1 && q.y === 1 && q.type === 2) {
                passed++;
                const r = new Rook(4, 4);
                if (r.x === 4 && r.y === 4 && r.type === 3) {
                    passed++;
                    const b = new Bishop(5, 5);
                    b.move(p.x, p.y);
                    if (b.x === 1 && b.y === 1 && b.type === 4) {
                        passed++;
                        console.log('TD03 :: OK');
                        return;
                    }
                }
            }
        }

    }
    console.log(`You have passed ${passed} tests`)
    console.log('TD03 :: KO');
}

test03();