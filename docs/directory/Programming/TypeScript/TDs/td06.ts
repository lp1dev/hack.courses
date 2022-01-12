/* TD06 - Arbres binaires

Maintenant que nous avons vues les
listes chaînées nous pouvons nous
attaquer aux arbres binaires!

Un arbre binaire est une structure de
données assez similaire aux listes chaînées, 
https://fr.wikipedia.org/wiki/Arbre_binaire
à la différence que nous parlons de noeuds 
et non de cellules et que chaque noeud possède 
deux éléments, un élément gauche et un élément 
droite ! Ce qui permet à notre liste de s'étendre
non plus sur une seule mais sur deux dimensions,
comme la représentation ci-dessous :

        2
       / \
      /   \
     /     \
    1       3
   / \     / \
  0   7   9   1
     /
    8

Un arbre binaire a toujours une seule racine, 
c'est le premier noeud de notre arbre!

Le but de ce TD est de créer le noeud root d'un 
arbre binaire conforme à la représentation ASCII
de l'arbre dessiné plus haut.

*/

/* TD Part */

const root: any = {};

/* Testing Part */
import { expect } from 'chai';
import 'mocha';

describe('TD06', () => {
    it('Should contain a binary tree\'s root', () => {
        expect(root).to.exist;
        expect(root.left).to.exist;
        expect(root.right).to.exist;
        expect(root.value).to.be.equal(2);
    })
    it('Should contain all of the given nodes', () => {
        expect(root.left.value).to.be.equal(1);
        expect(root.right.value).to.be.equal(3);
        expect(root.left.left.value).to.be.equal(0);
        expect(root.left.right.value).to.be.equal(7);
        expect(root.left.right.left.value).to.be.equal(8);
        expect(root.right.right.value).to.be.equal(1);
        expect(root.right.left.value).to.be.equal(9);
    })
});