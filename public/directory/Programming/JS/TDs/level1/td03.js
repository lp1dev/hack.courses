/* td03 - Rot

Le but de cet exercice est d'implémenter la 
fonction rot1. Cette fonction prend une
chaîne de caractère "str" en paramètre et
retourne la même chaine, mais en remplaçant
chacune des lettres par la lettre suivante
dans l'alphabet (a = b, b = c, c = d [...] z = a). 
Par exemple la chaîne "Hello World" donnera
"Ifmmp Xpsme".

*/

/* TD Part */


/* Testing Part */

try {
    if (rot1("Yjj umpi ylb lm njyw kyicq hyai y bsjj zmw") === 
    "Zkk vnqj zmc mn okzx lzjdr izbj z ctkk anx") {
        console.log('TD03: OK')
    } else {
        console.log('TD03: KO')
    }
} catch(e) {
    console.log('TD03: KO')
}
