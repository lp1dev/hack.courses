/* TD01 - From JS to TS

Le contenu de ce fichier a été écrit en 
JavaScript, le but de cet exercice est de
modifier la function td01 et les constantes 
qui l'entourent pour que la syntaxe corresponde 
à ce que nous avons vu en cours sur TypeScript. 

Attention, ce n'est pas parce que le code
compile qu'il utilise bien les syntaxes de
TypeScript.

*/

/* TD Part */

const template = 'Hello name!';

function td01(name : any) {
    return template.replace('name', name);
}

/* Testing Part */
import { expect } from 'chai';
import 'mocha';

describe('TD01', () => {
    it('Should contain a td01 fonction saying hello', () => {
        expect(td01('test')).to.equal('Hello test');
        expect(td01('azertyuiop')).to.equal('Hello azertyuiop');
    });
});