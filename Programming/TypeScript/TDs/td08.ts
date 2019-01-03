/* TD08 - Binary Tree Utils

Le but de cet exercice est d'écrire 
la classe BinaryUtils possédant plusieurs 
méthodes permettant de modifier et parcourir 
un arbre binaire. Notamment :

- has(root, value) : Retourne true si value fait partie
de l'arbre commençant par root. False dans le cas 
contraire.

- add(root, value) : Permettant d'ajouter une valeur
à la suite de l'arbre défini par root. Elle peut être 
ajoutée sur la branche de votre choix tant qu'elle est
ajoutée tout en bas de votre arbre binaire.

- delete(root, value) : Permettant de supprimer une
valeur de l'arbre binaire défini par root.

*/

/* TD Part */

class BinaryUtils {
    static has(root: any, value: any) {
    }
    static add(root: any, value: any) {
    }
    static delete(root: any, value: any) {
    }
}


/* Testing Part */
import { expect } from 'chai';
import 'mocha';

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

describe('TD08', () => {
    it('Should contain a BinaryUtils.has method', () => {
        expect(BinaryUtils.has(root, 4)).to.be.true;
    });
    it('Should contain a BinaryUtils.add method', () => {
        BinaryUtils.add(root, 5)
        expect(BinaryUtils.has(root, 5)).to.be.true;
    });
    it('Should contain a BinaryUtils.delete method', () => {
        BinaryUtils.delete(root, 5)
        expect(BinaryUtils.has(root, 5)).to.be.false;
    });
});