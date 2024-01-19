//ordering arrays

let array = ['Árvore', 'Cadeira', 'Estrada', 'Banco', 'Ar']
let arraySorted = array.sort(); //ordinary sort
let localeSort = array.sort((a,b) => a.localeCompare(b))
console.log(arraySorted, localeSort)

//remove item from array; splice performs better than filter
let arrayNumbers = [1,2,3,4,5]; //indexes: 0,1,2,3,4
arrayNumbers.splice(2,1) //removes 3 from index 2
console.log(arrayNumbers)
arrayNumbers.push(3)
arrayNumbers.sort();
console.log(arrayNumbers)
let index = arrayNumbers.indexOf(3)
arrayNumbers.splice(index, 1)
console.log(arrayNumbers)

