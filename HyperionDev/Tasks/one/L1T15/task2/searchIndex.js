const dataArray =[
    "javascript",
    "react",
    "next",
    "css",
    "sass",
    "vue"
]

//The index variable will deterime at which index the function will begin looping through the array while searching for the value
const searchIndex = (string, index) =>{ 

    if(index <= dataArray.length){ // This checks the index of '0' in the array, if the word is matching 
        if(string == dataArray[index]){
            console.log(string, "Found at:", index)
        }
    }

    const updatedIndex = index + 1

    if(index <= dataArray.length){

        if(string == dataArray[updatedIndex]){
            console.log(string, "Found at:", updatedIndex)
        }

        else {
            const updatedIndex = index + 1
            return searchIndex(string, updatedIndex) //If the value is not found, it will call the function to continue looping through the array
        }


    } else {
           return  console.log(-1) // If the word the user is searching for is not in the array, it will return -1
            

    }

}

searchIndex('css', 0)
searchIndex('javascript', 0)
searchIndex('vue', 0)
// searchIndex('css', 0)




