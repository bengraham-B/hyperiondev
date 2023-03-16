

let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[key]); //Changed 'k' to 'key'


  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'doh!', // Removed a single quation mark
  maggie: '(Pacifier Suck)',
};

//Brandon Waddy assited me with completing the task

printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']); // added '[]' around the second parameter of the 'printValuesOf' function to make it an array.




// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined