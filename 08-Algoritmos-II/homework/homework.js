'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  //creamos el pivote
  var numeroRandom = Math.floor(Math.random() * array.length);
  var pivote = array[numeroRandom];

  var izquierda = [];
  var iguales = [];
  var derecha = [];

  //iteramos el array acutal y pushemos en los otros array

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivote){
      izquierda.push(array[i]);
    }else if(pivote < array[i]){
      derecha.push(array[i]);
    }else{
      iguales.push(array[i]);
    }
  }
  return quickSort(izquierda).concat(iguales, quickSort(derecha));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //preguntamos si el array esta vacio
  if(array.length <= 1 ) return array;

  //dividimos el array a la mitad
  const i = Math.floor(array.length / 2);
  let left = array.slice(0, i);
  let right = array.slice(i);

  //usamos recursion para ir ordenando los elementos del array
  left = mergeSort(left);
  right = mergeSort(right);

  const result = [];

  //recorro y comparo y lo agrego al nuevo array
  while(left.length && right.length){
    if(left[0] > right[0]){
      result.push(right.shift());
    }else{
      result.push(left.shift());
    }
  }
  return [...result, ...left, ...right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
