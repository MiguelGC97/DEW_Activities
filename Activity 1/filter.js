function filter(attraction, age, height) {
    //write your JS code here:
    
    /*
    {
        name: "The roller coaster",
        id: 2,
        description: "Blazing speeds on a winding route through the mysteries of the McChun Mine",
        minAge: 12,
        minHeight: 130,
        maxHeight: 210
    },
    */

    //debugger; Para habilitar el debugger en el inspector del navegador

    if(!isNaN(attraction.minAge) && age < attraction.minAge){
        return false;
    }

    if(!isNaN(attraction.maxAge) && age > attraction.maxAge){
        return false;
    }

    if(!isNaN(attraction.minHeight) && age < attraction.minHeight){
        return false;
    }

    if(!isNaN(attraction.maxHeight) && age > attraction.maxHeight){
        return false;
    }

    return true;
}