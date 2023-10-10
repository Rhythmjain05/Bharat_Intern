var degree = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var kelvin = document.getElementById("kelvin");
degree.oninput = function(){
    let f = (parseFloat(degree.value)*9)/5+32;
    fahrenheit.value=parseFloat(f.toFixed(2));
    let k=(parseFloat(degree.value))+273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}

fahrenheit.oninput = function(){
    let d = ((parseFloat(fahrenheit.value)-32)*5)/9;
    degree.value = parseFloat(d.toFixed(2));
    let k = ((parseFloat(fahrenheit.value)-32)*5)/9+273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}
kelvin.oninput = function(){
    let d =(parseFloat(kelvin.value)-273.15);
    degree.value = parseFloat(d.toFixed(2));
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32; 
    fahrenheit.value = parseFloat(f.toFixed(2));
}
