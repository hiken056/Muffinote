// ANY

let fruitShop: any;

fruitShop.getFruit();

console.log(fruitShop.toUpperCase());

//nu da eroare chiar daca nu exista
//avoid this type!!!!!

const getGameStats = <T>(args:T) : void => {
    
}

getGameStats<number>(45)