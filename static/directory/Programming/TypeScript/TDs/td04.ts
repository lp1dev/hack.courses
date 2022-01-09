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
42, 43 et 44.

https://fr.wikipedia.org/wiki/Liste_cha%C3%AEn%C3%A9e

*/

/* TD Part */

const cell: any = null;

/* Testing Part */

import { expect } from 'chai';
import 'mocha';

describe('TD04', () => {
    it('Should contain a linked list starting with cell', () => {
        expect(cell.value).to.equal(42);
        expect(cell.next).to.exist;
    });
    it('Should contain three items in the linked list', () => {
        expect(cell.next.value).to.equal(43);
        expect(cell.next.next).to.exist;
        expect(cell.next.next.value).to.equal(44);
    });
});
