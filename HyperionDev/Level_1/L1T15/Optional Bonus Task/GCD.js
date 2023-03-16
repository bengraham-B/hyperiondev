function gcd(a, b) {
    var divisor;
    // looping from 1 to a and b
    for (let i = 1; i <= a && i <= b; i++) {

  
      // check if is factor of both integers
      if( a % i == 0 && b % i == 0) {
            divisor = i;
      }
    }
    return divisor;
}

// var result = gcd(20, 30);
// console.log(result);

const GCD = (a, b, index) => {

    const updatedIndex = index + 1

    if(updatedIndex <= a && updatedIndex <= b){
        if(a % index == 0 && b % index == 0){
            console.log(updatedIndex, " - GCD")
        } 
    
        else {
            GCD(a, b, updatedIndex)
        }
    }
}

const GCD2 = (a, b, index) => {

    const updatedIndex = index + 1

    if(a % index == 0 && b % index == 0){
        console.log(updatedIndex, " - GCD2")
    } 

    else if(updatedIndex <= a && updatedIndex <= b){
       GCD2(a, b, updatedIndex)
    }
}

GCD(12, 8, 0)

// console.log(12 % 4)
// console.log(8 % 4)


/*
Resources used:
(1) https://www.datainfinities.com/46/find-greatest-common-divisor-gcd-in-javascript: Information regarding highest common divsors between two numbers

*/