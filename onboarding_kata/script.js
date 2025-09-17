
/* echauffement 1

const firstName = "Abdel"
const lastName = "Berkat"

console.log(`je m'appelle ${firstName} ${lastName}`) 

*/

 /*/ echauffement 2
function add (number1, number2){
    return number1 + number2
}
console.log(add(2, 3))
*/

/* echauffement 3
function equal (number1,number2){
    if (number1 === number2 ){
        return true
    }
    return false   
}
console.log(equal(2, 3));
console.log(equal(3, 3));
*/

/* exercice 1
function annoncerChoix(x){
    return `Tu as choisi le numéro ${x}`
}
console.log(annoncerChoix(3))

*/


/* exercice 2
function servirBoisson(number){
    if (number === 1){
        return "Voici un jus de mangue 🥭"
    }
    else if (number === 2){
        return "Voici un jus de pomme 🍏"
    }
    else if (number === 3){
        return "Voici un jus de pastèque 🍉"
    }
    else if (number === 5){
        return "Désolé, je n'ai pas cette boisson 😢"
    }
    
    }
    console.log(servirBoisson(1))
    console.log(servirBoisson(2))
    console.log(servirBoisson(3))
    console.log(servirBoisson(5))
  
*/ 

/*
let boissons = [
    "jus de mangue 🥭",
    "jus de pomme 🍏",
    "jus de pastèque 🍉",
    "jus d'orange 🍊",
    "jus de myrtille 🫐",
    "jus de raisin 🍇",
    "jus d’ananas 🍍",
    "jus de citron vert 🍈",
    "jus de fraise 🍓"
  ];

  boissons.push("jus de kiwi 🥝")  // additionnel
  for(let i=1; i<boissons.length; i++){
    console.log(`Boisson ${i} ${boissons[i]}`)

}
*/


/* exercice refait a la maison 

const prenom = "abdel"
const nom = "berkat"
console.log(`je m'appelle ${prenom} ${nom}`)

*/

/*
function add(number1 , number2){
    return number1 + number2
}
console.log(add(2,3))

*/

/*
function equal(number1, number2){

    if (number1 === number2){
        return true   
    }
    else
    return false
}

console.log(equal(44,44))


*/


/*

function annoncerChoix(number){
    return `tu as choisi le numero ${number}`

}
console.log(annoncerChoix(3))

*/

function servirBoisson(number){
    if (number === 1){
        return `Voici un jus de mangue 🥭`
    }
    else if (number === 2){
        return `Voici un jus de pomme 🍏`
    }
    else if (number === 3){
        return `Voici un jus de pastèque 🍉`
    }
    else if (number === 5){
        return `Désolé, je n’ai pas cette boisson 😢`
    }
}
console.log(servirBoisson(2))