'use strict'

//Holaaa

function BinarioADecimal(num) {
  // tu codigo aca
  return Number.parseInt(num, 2);
}

//Otra forma mas larga de hacerlo
/*function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  var j = 0;
  for (i = num.length -1 ; i >=0; i--){
    suma += num[i] * Math.pow(2,j);
    j++;
}
  return suma;
}
*/

/*function DecimalABinario(num) {
  // tu codigo aca
  const result = num.toString(2);

  return result;

}
*/

function DecimalABinario(num) {
  // tu codigo aca
  
  let resto = '';
  while( num !== 0){
    resto = num % 2 + resto;
    num = Math.floor(num/2);
	}

  return resto;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}