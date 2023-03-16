const favVehicle = "Audi R8"

const cars = [
    'Ferrari 458',
    'Bugahtti Chiron',
    'Lamborgihi Aventador',
    'Dodge Challenger',
    "Audi R8"
]

for(let i = 0; i < cars.length; i++){
    
    if(cars[i] == 'Audi R8'){
        console.log(`The ${favVehicle} is my favourite`)
        break
    }
    
    console.log(`The ${cars[i]} is not my favourite vehicle`)
}