const url = "https://cdn2.thecatapi.com/images/av0.gif"  //^ URL for the cat gif.

//*(1) https://stackoverflow.com.
const getCatGIF = async() =>{ 
    const response = await fetch(url)
    return response.url //^ Returns the url from the api.
}

console.log(getCatGIF()) //^ Logs the url to the cat gif to the console.

/*
 * Resounrces Used:
 * (1) https://stackoverflow.com/questions/42964102/syntax-for-an-async-arrow-function: Information on arrow async function.
 * (2) https://www.youtube.com/watch?v=V_Kr9OSfDeU: Extra information on async await.
 */