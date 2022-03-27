/* Find the number with the most digits.
If two numbers in the argument array have the same number of digits, 
return the first one in the array.*/

function findLongest(array) {
    let elMasGrande = ""
    for (i = 0; i < array.length; i = i + 1) {
        let enString = array[i].toString()
        if (enString.length > elMasGrande.length) {
            elMasGrande = enString
        }
    }
    return Number(elMasGrande)
}