// Énoncé
// Écris une fonction sommeEntiers(n) qui retourne la somme de tous les entiers de 1 à n.
// Exemples
// sommeEntiers(1) ➜ 1
// sommeEntiers(4) ➜ 10 (1 + 2 + 3 + 4)
// sommeEntiers(10) ➜ 55
// sommeEntiers(0) ➜ 0
// Contraintes
// n est un entier ≥ 0.
// Si n === 0, retourne 0.
// La fonction retourne un nombre (ne fais pas de console.log dedans).



const sommeEntiers = (n) => {
    let total = 0
         for(let i=1 ; i<=n ; i++){
            total+= i
    }
    return total
    }



console.log(sommeEntiers(1)) // ➜ 1
console.log(sommeEntiers(4)) //➜ 10 (1 + 2 + 3 + 4)
console.log(sommeEntiers(10)) // ➜ 55
console.log(sommeEntiers(0)) // ➜ 0