let carros = [
    "Palio 98", 
    "Toro", 
    "Uno", 
    10, 
    true, 
    new Date(), 
    function(a, b){
        return a + b;
    }
];

// percorrer array 
carros.forEach(function(value, index){
    console.log(index, value)
});

console.log("================")

console.log(carros[6](9, 1));