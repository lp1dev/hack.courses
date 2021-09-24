/* TD00 - C'est parti! 

On commence facilement, le but de cet exercice
est d'afficher la chaîne de caractère "TD00 :: OK"
dans la console de Node.js

Vous ne devez en aucun cas modifier la partie
définie comme "Testing part" dans les TDs.

Vous travaillerez dans les bornes définies par la TD Part.

*/

/* TD Part */

let message: string;

/* Testing Part */
import { expect } from 'chai';
import 'mocha';

describe('TD00', () => {
    it('Should contain a message whose value is "Hello World"', () => {
        expect(message).to.equal('Hello World');
    });
});