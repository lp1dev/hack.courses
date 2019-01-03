/* TD02 - Pawn stars

Le but de cet exercice est de créer une
classe Pawn pour un jeu de dâmes.
Chaque pion possède une position en x et y
et doit pouvoir se déplacer
(il n'est pas nécessaire de vérifier 
les déplacements) avec la méthode move(x, y).

*/

/* TD Part */

class Pawn {
    constructor(...args: any) {
    }
}

/* Testing Part */
import { expect } from 'chai';
import 'mocha';

describe('TD02', () => {
    const p : any = new Pawn(0, 0);
    it('Should contain a Pawn that can move', () => {
        expect(typeof (p.move)).to.equal('function');
        expect(p.x).to.equal(p.y).and.equal(0);
        p.move(5, 3);
        expect(p.x).to.equal(5);
        expect(p.y).to.equal(3);
    });
});
