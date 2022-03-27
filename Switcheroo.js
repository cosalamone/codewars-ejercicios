/* Given a string made up of letters a, b, and/or c, switch the position of 
letters a and b (change a to b and vice versa). Leave any incidence of c 
untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
    let newString = ""
    for (let i = 0; i < x.length; i = i + 1) {
        if (x[i] == "a") {
            newString = newString + "b"
        }
        else if (x[i] == "b") {
            newString = newString + "a"
        }
        else {
            newString = newString + "c"
        }
    }
    return newString
}