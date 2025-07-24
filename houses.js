const houses = [];

let i = 0;
while (i<10){
    let house = function(){
        console.log(i);
    }
    houses.push(house)
    i++;
}

houses[0](); 
houses[7](); 
