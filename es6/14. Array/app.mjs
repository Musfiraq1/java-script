let cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);

let pet = ["cat", "dog","rabbit", "whale", "loin"]
pet.pop()
alert("i have " + pet)

let pets = ["cat", "dog","rabbit", "whale", "loin"]
pets.push("fish", "monkey")
alert("i have " + pets)

let animal = ["cat", "dog","rabbit", "whale", "loin"]
animal.shift()
alert("i have " + animal)

let animals = ["cat", "dog","rabbit", "whale", "loin"]
animals.unshift("tiger", "zebra")
alert("i have " + animals)

let name = ["cat", "dog","rabbit", "whale", "loin"]
name.splice(2,1, "wolf")
alert("i have " + name)

let random = ["cat", "dog","rabbit", "whale", "loin"]
let random2 = random.slice(2,4)
random2.splice(1,0,"panguin")
alert("i have " + random2)



