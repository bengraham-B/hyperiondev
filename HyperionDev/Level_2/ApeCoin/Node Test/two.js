const nameCountries = () => {
    const countryArray = ["USA", "Russia", "Tanzinia", "DRC", "Mexico"]
    let num = 1
    for(let i = 0; i < countryArray.length; i++){
        console.log(`${num}.Country: ${countryArray[i]}`)
        num++
    }
}

nameCountries()