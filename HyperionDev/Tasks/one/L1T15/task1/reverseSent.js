const revseSent = (string, index) => {
    let stringSplit = string.split("") // This line adds each character of the string to an array using the split method
    stringSplit.reverse() // This reverse the order of the stringSplit array, (1)

    console.log("-->" ,stringSplit[index])

    const updatedIndex = index + 1 

    
    

    /* 
    * Recuersive call which will act a a Break case when udatedIndex value is == the length of * the string.
    */

    if(updatedIndex < string.length){
        revseSent(string, updatedIndex)

    }


}

revseSent("goose", 0)


/*
Resources used:

(1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse : information regarding how o reverse an array 


*/






