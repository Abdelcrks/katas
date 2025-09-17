// Kata 1 — Pair ou impair
// Énoncé
// Écris une fonction pairOuImpair(n) qui retourne :
// "Pair" si n est divisible par 2,
// "Impair" sinon.
// Exemples
// pairOuImpair(4) ➜ "Pair"
// pairOuImpair(7) ➜ "Impair"
// pairOuImpair(0) ➜ "Pair"
// pairOuImpair(-3) ➜ "Impair"
// Contraintes / Détails
// n est un entier (positif, négatif ou 0).
// Ne retourne que exactement "Pair" ou "Impair" (respecte la casse).


const pairOuImpair = (n) => {
    if(n % 2 === 0 ){
        return "Pair"
    }else{
        return "Impair"
        }

}

console.log(pairOuImpair(4));  // "Pair"
console.log(pairOuImpair(7));  // "Impair"
console.log(pairOuImpair(0));  // "Pair"
console.log(pairOuImpair(-3)); // "Impair"