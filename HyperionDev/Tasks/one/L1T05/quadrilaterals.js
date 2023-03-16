// Used (1) stackoverflow to help formulate the inpute sections for the corners and sides.
let coner1 = prompt("Angle of coner 1")
let coner2 = prompt("Angle of coner 2")
let coner3 = prompt("Angle of coner 3")
let coner4 = prompt("Angle of coner 4")

let side1 = prompt("What is the lenght of side 1")
let side2 = prompt("What is the lenght of side 2")
let side3 = prompt("What is the lenght of side 3")
let side4 = prompt("What is the lenght of side 4")

// (2) Used stack overflow, redarding use true within the switch statement
switch(true) {
       // Square
      case coner1 == coner2 && coner3 == coner4 && coner1 == coner4 && coner2 == coner3 
      && side1 == side2 && side3 == side4 && side1== side4 && side2 == side3:
            console.log("Square")
            break

      //Rectangle
      case coner1 == 90 && coner3 == 90 && coner2 == 90 
      && coner4 == 90 && side1 == side3 && side2 == side4:
             console.log("Rectangle")
             break

      // Rombus
      case coner1 == coner3 && coner1 < 90 && coner3 < 90
      && coner2 == coner4 && coner2 > 90 && coner4 > 90
      && side1 == side2 && side3 == side4 && side1 == side4 && side2 == side3:
            console.log("Rombus")
            break
      
      // Parallelogram
      case coner1 == coner3 && coner1 < 90 && coner3 < 90
      && coner2 == coner4 && coner2 > 90 && coner4 > 90
      && side1 == side3 && side2 == side4:
            console.log("Parallelogram")
            break
      
      default:
            console.log("Not a Quad")
            break




      

      

}

// if(coner1 == coner2 && coner3 == coner4){
//       console.log("Square")


// }





/*
resources used:
(1) https://stackoverflow.com/questions/72489500/js-script-to-test-a-quadrilateral-property-and-output-the-determined-shape
(2) https://stackoverflow.com/questions/9235152/can-i-use-a-case-switch-statement-with-two-variables
*/