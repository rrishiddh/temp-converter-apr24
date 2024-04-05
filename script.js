

const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");



function celToFar(){
    const output = (parseFloat(celcius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    
}

function farToCel(){
    const output = (parseFloat(fahrenheit.value)-32) * 5/9;
    celcius.value = parseFloat (output.toFixed(2));
    // console.log(output);
}