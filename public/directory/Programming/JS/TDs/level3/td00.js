/* TD00 - Suite de Fibonacci

Écrivez une fonction f(n) calculant le terme n d'une suite de Fibonacci.

Pour rappel, une suite de Fibonacci est définie par

fib(n+1) = fib(n) + fib(n - 1)

fib(0) == 0 et fib(1) == 1

Par exemple :

fib(3) = fib(2) + fib(1)

*/
/* TD Part */

const fib = (n) => {
}

/* Testing Part */
const terms = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
function test() {
    for (index in terms) {
        if (fib(index) !== terms[index])
            return false
    }
    return true
}

console.log(test() === true ? 'TD00 :: Success' : 'TD00 :: Failed')
