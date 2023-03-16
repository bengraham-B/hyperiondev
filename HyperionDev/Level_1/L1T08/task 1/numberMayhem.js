// Loop which counts down from 20
let i = 0
let j = 20
let counter = 0

while(j <= 200){
    console.log(j)
    
    if(counter === 20){
        break
    }
    
    counter ++ 
    j--
}

// Loop which prints even numbers down from twenty
for(let i = 20; i > 0; i--){
    if(i % 2 == 0){
        console.log(i)
    }
}

//Loop which prints out a star pattern
// used www.tutorialstonight to help format this loop
let star = ""
for(let i = 0; i<5; i++){
    console.log(star += "*")
}

/*
Resources Used:
(1) https://www.tutorialstonight.com/js/javascript-star-pattern
*/





