/* TD07 - En profondeur

Le but de ce TD est d'écrire la fonction
nodesNumber(root), qui permet de calculer
le nombre de noeuds compris dans un arbre 
binaire.

*/

/* TD Part */

function nodesNumber(root: any) {

}

/* Testing Part */
import { expect } from 'chai';
import 'mocha';

describe('TD07', () => {
    it('Should contain a nodesNumber function returning a tree\'s number of nodes', () => {
        const root: any = {
            left: {
                left: {
                    left: null,
                    right: null,
                    value: 3
                },
                right: {
                    left: null,
                    right: {
                        left: null,
                        right: null,
                        value: 4
                    },
                    value: 3
                },
                value: 2
            },
            right: {
                left: null,
                right: null,
                value: 3
            },
            value: 1
        }
        expect(nodesNumber(root)).to.equal(6);
    });
});