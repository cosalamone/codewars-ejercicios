/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

function reverseSeq(n) {
    let lista = [];

    for (let indice = n; indice >= 1; indice = indice - 1) {
        lista.push(indice);
    }
    return lista;
}