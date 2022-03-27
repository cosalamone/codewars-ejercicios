/* Given a string, capitalize the letters that occupy even indexes and odd 
indexes separately, and return as shown below. Index 0 will be considered 
even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for 
more examples.

The input will be a lowercase string with no spaces.

*/

function capitalize(s) {
    let variablePar = ""
    let variableImpar = ""
    let switchPar_Impar = true // booleano  true = par 

    for (i = 0; i < s.length; i = i + 1) {
        if (switchPar_Impar == true) {
            variablePar = variablePar + s[i].toUpperCase()
            variableImpar = variableImpar + s[i]
            switchPar_Impar = false
        }
        else {
            variablePar = variablePar + s[i]
            variableImpar = variableImpar + s[i].toUpperCase()
            switchPar_Impar = true
        }
    }

    return [variablePar, variableImpar];
};