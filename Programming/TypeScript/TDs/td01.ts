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

function td01(name) {
    return template.replace('name', name);
}

/* Testing Part */
function test01() {
    if (td01('test') === 'Hello test') {
        if (td01('azertyuiop') === 'Hello azertyuiop') {
            console.log('TD01 :: OK');
            return;
        }
    }
    console.log('TD01 :: KO');
}

test01();