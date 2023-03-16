const dataArray =[
    "javascript",
    "react",
    "next",
    "css",
    "sass",
    "vue"
]

const searchIndex = (string, index) =>{

    if(index <= dataArray.length){
        if(string == dataArray[index]){
            console.log(index, "Found", string)
        }
    }

    const updatedIndex = index + 1

    if(index <= dataArray.length){

        if(string == dataArray[updatedIndex]){
            console.log(updatedIndex, "Found", string)
        }

        else {
            const updatedIndex = index + 1
            return searchIndex(string, updatedIndex)
        }


    } else {
        return -1

    }

}

searchIndex('css', 0)


