/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and 
carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You function receives one side of the DNA (string, except for Haskell); you need 
to return the other complementary side. DNA strand is never empty or there is no 
DNA at all (again, except for Haskell).


Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/

function DNAStrand(dna) {
    let dnaComplementary = ""
    for (i = 0; i < dna.length; i = i + 1) {
        if (dna[i] == "A") {
            dnaComplementary = dnaComplementary + "T"
        } else if (dna[i] == "T") {
            dnaComplementary = dnaComplementary + "A"
        } else if (dna[i] == "G") {
            dnaComplementary = dnaComplementary + "C"
        } else if (dna[i] == "C") {
            dnaComplementary = dnaComplementary + "G"
        }
    }
    return dnaComplementary
}



/* function DNAStrand(dna){
  let dnaComplementary = ""
  for (i=0; i<dna.length; i=i+1){
   switch (dna){
      case "A":  dnaComplementary= dnaComplementary + "T"
      case "T":  dnaComplementary= dnaComplementary + "A"
      case "G":  dnaComplementary= dnaComplementary + "C"
      case "C":  dnaComplementary= dnaComplementary + "G"
    }
  } return dnaComplementary
}
*/