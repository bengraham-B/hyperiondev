let shoeArray = []

class Shoes {

    constructor(name, productCode, quality, valuePerItem){
        this.name = name
        this.productCode = productCode
        this.quality = quality
        this.valuePerItem = valuePerItem

        //(1)stackoverflow.com was used regarding pushing class instances to an array
        shoeArray.push(this) // Pushing class instances to an array, shoeArray

        // Method to search for any shoe in the array
        //(2) www.javascripttutorial.net: was used regarding information for class methods
        Shoes.findShoe = function(search){
            let shoeFound = ''

            for(let i = 0; i < shoeArray.length; i++){ //Allows user to find shoes by their name
                if(shoeArray[i].name == search){
                    console.log(shoeArray[i])
                    shoeFound = i
                }

                else if(shoeArray[i].productCode == search){ //Allows user to find shoes by their productCode
                    console.log(shoeArray[i])
                    shoeFound = i
                }
                else if(shoeArray[i].quality == search){ //Allows user to find shoes by their Quality
                    console.log(shoeArray[i])
                    shoeFound = i
                }
                else if(shoeArray[i].valuePerItem == search){ //Allows user to find shoes by their valuePerItem
                    console.log(shoeArray[i])
                    shoeFound = i
                }
            }

            return shoeFound //This returns the index of the search result
        }

        // This method finds the lowest value of the 'valuePerItem' in the instances of the Shoes class.
        Shoes.findLowestValueShoe = () => {

            let lowestValueArray = []

            for(let i = 0; i < shoeArray.length; i++){
                lowestValueArray.push(shoeArray[i].valuePerItem)
            }

            const lowestValue = Math.min(...lowestValueArray) //(3) bobbyhadz.com: Information regarding the spread operator.
            
            for(let i = 0; i < shoeArray.length; i++){
                if(shoeArray[i].valuePerItem == lowestValue){
                    console.log(shoeArray[i])
                }
            }        
        }

        // This method finds the highest value of the 'valuePerItem' in the instances of the Shoes class.
        Shoes.findHighestValueShoe = () => {
            let highestValueArray = []

            for(let i = 0; i < shoeArray.length; i++){
                highestValueArray.push(shoeArray[i].valuePerItem)
            }

            const highestValue = Math.max(...highestValueArray) //(3) bobbyhadz.com: Information regarding the spread operator
            
            for(let i = 0; i < shoeArray.length; i++){
                if(shoeArray[i].valuePerItem == highestValue){
                    console.log(shoeArray[i])
                }
            }   

        }

        //This method will allow the user to select an instance of the class Shoes, then select an attribute and change it to what ever value they wish.
        Shoes.editAspectOfInstance = (findInstance, changeAttribute, newAttribute) => {
            let searchIndex = Shoes.findShoe(findInstance) // Gets the index of the instance of the shoe from the shoeArray
            shoeArray[searchIndex][changeAttribute] = newAttribute // This is where the user sets the new value of the attribute
            console.log(shoeArray[searchIndex]) // This logs new instance to the console
        }

        // This method will organise the class instances in assending order
        Shoes.orderObjectsInAscendingOrder = () => {
            let assendingArray = []
            for(let i = 0; i < shoeArray.length; i++){ 

                assendingArray.push(shoeArray[i].valuePerItem)
            }

            //(4) www.w3schools.com: was used regarding information to sort an array in assending order
            let orderedArray = assendingArray.sort() // Storing the sorted array in a variable, orderedArray

            for(let j = 0; j < orderedArray.length; j++){
                for(let g = 0; g < shoeArray.length; g++){
                    if(orderedArray[j] == shoeArray[g].valuePerItem){
                        console.log(shoeArray[g])
                    }
                }
            }
        }
    }

}

let shoe1 = new Shoes("Addias_One", "SH01", "92%", 1200)
let shoe2 = new Shoes("Nike_Airforce", "SH23", "95%", 1700)
let shoe3 = new Shoes("Addias_Two", "SH11", "87%", 1150)
let shoe4 = new Shoes("DC Hightops", "SH81", "87%", 1250)
let shoe5 = new Shoes("Forest_Boots", "SH04", "90%", 1130)


// console.log(shoeArray)

// Shoes.findShoe("100%")
// Shoes.findHighestValueShoe()
// Shoes.findLowestValueShoe()

// Shoes.editAspectOfInstance("Asics_7", 'productCode', "GP01")

Shoes.orderObjectsInAscendingOrder()


// console.log(shoeArray)


/*
Resources used:
(1): https://stackoverflow.com/questions/54163338/how-to-push-all-objects-in-class-into-one-array-javascript
(2): https://www.javascripttutorial.net/es6/javascript-class/
(3): https://bobbyhadz.com/blog/javascript-get-max-id-in-array-of-objects
(4): https://www.w3schools.com/js/js_array_sort.asp
*/
