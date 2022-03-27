/*Write a function to convert a name into initials. This kata strictly 
takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name) {
    let separado = name.split(" ");
    let soloNombre = separado[0];
    let soloApellido = separado[1];
    let abrev = soloNombre[0].concat(".", soloApellido[0]);
    return abrev.toUpperCase();
}