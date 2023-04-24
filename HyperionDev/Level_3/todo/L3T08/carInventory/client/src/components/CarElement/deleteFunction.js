


//! This is the function in the delete button which will handle the delete opertion of CRUD.
const deleteCRUD = async (car) => {

    const res = await fetch(`/api/cars/${car}`, {
        method: "DELETE"

    })

    const json = await res.json()

    if(res.ok){
        console.log("Item deleted")
        console.log(json)
    }


}

export default deleteCRUD