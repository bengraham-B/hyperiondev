
// const string = "Max, Toby and Bella are awesome"
// let splitString = string.split()
// let joinString = splitString.join()

// console.log(string)
// console.log(splitString)
// console.log(joinString)

console.log("<==============================================================>")


const str = ' BBobby HHadz CCom ';

const result = str.split(/(?=[a-z])/);

// 👇️ [ ' ', 'Bobby ', 'Hadz ', 'Com ' ]
console.log(result);

