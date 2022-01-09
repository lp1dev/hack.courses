/* TD05 - Listes chaînées 2

Maintenant que nous nous somme familiarisés
avec les listes chainées nous allons pouvoir
aller plus loin dans leur utilisation!

Le but de cet exercice est de terminer
l'implémentation de la fonction 
linkedListLength qui retourne la longueur
de la liste chaînée commençant par la cellule
cell passée en paramètre.

N'hésitez pas à remplaçer les any utilisés par
un autre type. Exceptionnelement dans les tests
également!

Attention, dans le cas d'une liste chainée
circulaire (si la valeur next de la dernière
cellule pointe sur la première cellule), il
faudra retourner Infinity!

*/

/* TD Part */

function linkedListLength(cell: any): number {
    return 0;
}

/* Testing Part */

import { expect } from 'chai';
import 'mocha';

describe('TD05', () => {
    it('Should have a linkedListLength function returning a list\'s length', () => {
        expect(typeof (linkedListLength)).to.equal('function');
        const listLength = Math.floor(Math.random() * 100) + 1;
        let listRoot: any = {};
        let cell: any = listRoot;
        for (let i = 0; i < listLength; i++) {
            cell.next = { value: null, next: null };
            cell = cell.next;
        }
        expect(linkedListLength(listRoot)).to.equal(listLength);
        cell.next = listRoot
        expect(linkedListLength(listRoot)).to.equal(Infinity);
    });
});
