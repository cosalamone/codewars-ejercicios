/* 
Definition
Balanced number is the number that * The sum of all digits to the left
of the middle digit(s) and the sum of all digits to the right of the 
middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

Notes
If the number has an odd number of digits then there is only one middle 
digit, e.g. 92645 has middle digit 6; otherwise, there are two middle 
digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a 
number is balanced or not, e.g 413023 is a balanced number because the 
left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String


*/

function balancedNum(number) {
    let numeroEnString = number.toString()
    let derecha = 0
    let izquierda = 0
    let ultimaPosicion = numeroEnString.length - 1
    let n = Math.trunc(numeroEnString.length / 2)

    if (numeroEnString.length / 2 === n) {
        n = n - 1
    }


    for (i = 0; i < n; i = i + 1) {
        izquierda = izquierda + Number(numeroEnString[i])
    }

    for (i = ultimaPosicion; i > ultimaPosicion - n; i = i - 1) {
        derecha = derecha + Number(numeroEnString[i])
    }


    if (derecha == izquierda) {
        return ("Balanced")
    } else { return ("Not Balanced") }

}