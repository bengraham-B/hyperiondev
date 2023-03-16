//* ======================================Creating Objects with Object Laterals======================================

let bike = {
    brand: "Ducatti",
    model: '950',
    year: 2018,
    color: "Italian Flag",
    howOld: () =>{
        return `the bike is made in the year ${this.year}`
    }
}




//~ ======================================Creating Objects with Object Constructors======================================

function motorBikeDescription(brand, model, year, color){
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
}

let motorBike = new motorBikeDescription("Kawasaki", "Ninja H2", 2021, "Black")




//? ======================================Accessing and Assigning Object Properties======================================
let monster = {
    numberOfTeeth: 52,
    monsterColor: 'yellow',
    monstorHome: 'Jupiter',
    catchPhrase: "Bit me Bitch!"
}

let color = monster.monsterColor
let home = monster.monstorHome

console.log(color)
console.log(home)

//? Accessing objects through bracket notation
console.log(monster['numberOfTeeth'])
console.log(monster['catchPhrase'])

//? Assigniing propteries
// This will add the 'height' property as it does not exist yet
monster['height'] = '50m'
monster.legs = 2


//* ======================================Getters======================================
let monster2 = {
    numberOfTeeth: 52,
    monsterColor: 'yellow',
    monstorHome: 'Jupiter',
    catchPhrase: "How do you like them peaches",

    //* Getter Method to return catch pharase
    get getCatchPhrase(){
        return this.catchPhrase
    }
}
//* Calling getter method for monster2
console.log(monster2.getCatchPhrase)



//^  ======================================Setters======================================
let monster3 = {
    monstername: "Monster 3",
    numberOfTeeth: 52,
    monsterColor: 'yellow',
    monstorHome: 'Jupiter',
    catchPhrase: "How do you like them peaches",

    //* Getter Method to return catch pharase
    get getCatchPhrase(){
        return this.catchPhrase
    },

    //^ Settermethod to change monster home
    set newMonsterHome(newHome){
        this.monsterHome = newHome
    }
}

//^ Calling the setter method
monster3.newMonsterHome = "Ohio"
console.log(monster3.monsterHome)



//!  ======================================function meets object======================================

let loaded = {}

loaded.testing = function(signal){
    alert("Hello World! " + signal)
    loaded.signal = signal
}

loaded.final = function(signal){
    alert("Sup " + signal)
    loaded.signal = signal
}

loaded.testing("This page has loaded!")
loaded.final("Finally")
