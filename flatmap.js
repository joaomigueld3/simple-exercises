const arrayCrazy = [1, "Frutinha", ["Zé da Manga", "Calabreso"], "Creatino"] 

const array = arrayCrazy.flatMap(array => array)
console.log(array)