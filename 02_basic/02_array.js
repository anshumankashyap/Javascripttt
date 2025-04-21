//const marvel_heros = ["Spiderman", "Ironman", "Thor"]
//const DC_heros = ["Superman", "Flash", "Batman"]
//
////marvel_heros.push(DC_heros)
////console.log(marvel_heros);
//
////To aavoid the above situation we can use following situation
//
//const allHeros = marvel_heros.concat(DC_heros)
//console.log(allHeros);
//
///*This is a spread operator*/
//const allNewHeros = [...marvel_heros, ...DC_heros]
//console.log(allNewHeros);
//
//const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//console.log(anotherArray);
//
//const realAnotherArray = anotherArray.flat(Infinity)
//console.log(realAnotherArray);

console.log(Array.isArray("Anshuman"));
console.log(Array.from("Anshuman"));
console.log(Array.from({name: "Anshuman"}));//intresting (Here we have to define a specific key(name:) or values(Anshuman) to make an array)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
