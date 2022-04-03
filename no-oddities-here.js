/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order 
they are given. */

function noOdds(values) {
    let even = []

    for (i = 0; i < values.length; i = i + 1) {
        let check = values[i] % 2
        if (check == 0) {
            even.push(values[i])
        }
    }
    return even
}
