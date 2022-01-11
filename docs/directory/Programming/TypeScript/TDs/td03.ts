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

class Pawn {
    constructor(...args: any) {}
}
class King {
    constructor(...args: any) {}
}
class Queen {
    constructor(...args: any) {}
}
class Rook {
    constructor(...args: any) {}
}
class Bishop {
    constructor(...args: any) {}
}

/* Testing Part */

import { expect } from 'chai';
import 'mocha';


describe('TD03', () => {
    let p : any = new Pawn(0, 0);
    //
    function testPiece(id: number) {
        const moveX = Math.floor(Math.random() * 10);
        const moveY = Math.floor(Math.random() * 10);
        expect(typeof (p.move)).to.equal('function');
        expect(p.type).to.equal(id);
        expect(p.x).to.equal(p.y).and.equal(0);
        p.move(moveX, moveY);
        expect(p.x).to.equal(moveX);
        expect(p.y).to.equal(moveY);
    }
    
    it('Should contain a Pawn that can move', () => {testPiece(0)});
    p = new King(1, 1);
    it('Should contain a King that can move', () => {testPiece(1)});
    p = new Queen(2, 2);
    it('Should contain a Queen that can move', () => {testPiece(2)});
    p = new Rook(2, 2);
    it('Should contain a Rook that can move', () => {testPiece(3)});
    p = new Bishop(3, 3);
    it('Should contain a Queen that can move', () => {testPiece(4)});
});
