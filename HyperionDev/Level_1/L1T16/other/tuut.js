
while(true){
    let userInput = prompt()
    try{

        if(userInput == ""){
            throw "Empty"
        }

        if(userInput == 'five'){
            throw 'Wrong Word'
        }

        if(userInput == 2 || userInput == 5){
            throw "2 or 5"
        }

    }catch(err){
        console.log(err)

    }
    finally{

    }
}