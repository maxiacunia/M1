"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(dato) {
  //Creamos el nuevo nodo
  var node = new Node(dato);
  //Si recien creamos la lista nuestro head estara vacio head == null
  var current = this.head; 
  //preguntamos si el head esta vacio
  if(current === null){
    //si esta vacio agregamos el nodo al head
    this.head = node;
    this._length++; //incrementamos el tamanio de la lista
    return node;
  }
  //Si la lista ya tiene un nodo recorro hasta el final para encontrar el ultimo
  //mientras tenga algo sigo avanzando en mi lista
  while(current.next){
    current  = current.next;
  }

  current.next = node;
  this._length++;
  return node;
};

LinkedList.prototype.remove = function(){
  //verificamos si la lista tiene algo
  if(this._length === 0){
    return null;
    //verificamos si la lista es de un solo elemento
  } else if(this._length === 1){
    let aux = this.head.value; //guardamos el valor
    this.head = null;          // lo establecemos null
    this._length--;            //disminuimos la longitud de la lista
    return aux; //             //devolvemos el valor del nodo que teniamos
  }
  //Si hay mas de un nodo debemos recorre la lista hasta encontrar el ultimo
  var current = this.head;
  while(current.next.next){
    current = current.next;
  }
  //guarmaos el valor del ultimo y lo establecemos en null
  let aux = current.next.value;
  current.next = null;
  this._length--; //disminuimos la longitud de la lista
  return aux;     // //devolvemos el valor del ultimo nodo

};
LinkedList.prototype.search = function(value){
  //verificamos que tengamos algo en la lista
  var current = this.head;
  if(current === null){
    return null;
  }
  //Si tenemos algo iteramos hasta encontrarlo
  while(current){
    if(current.value === value){
      return value;
    } else if(typeof value === 'function'){
      if(value(current.value)){
        return current.value;
      }
    }
    current = current.next;
  }
  //si no lo encuentra devovlemos null
  return null
};



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function(key){
  //Le pasamos una key donde vamos a sumar el charcode de cada letra
  //luego lo dividimos por numBuckets para tener la posicion donde vamos a guardar el dato
  var suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma += key.charCodeAt(i);
  }
  return suma % this.numBuckets;
};
HashTable.prototype.set = function(key, value){
  //preguntamos si key es una string
  if(typeof key !== 'string') throw TypeError('Keys must be strings');
  //guardamos la posicion de la key
  let i = this.hash(key);
  //preguntamos si en esa posicion tenemos algo
  if(this.buckets[i] === undefined){
    this.buckets[i] = {};
  }
  //agregamos el dato en el array
  this.buckets[i][key] = value;
};



HashTable.prototype.get = function(key){
  //buscamos la posicion
  let i = this.hash(key);
  return this.buckets[i][key];
};
HashTable.prototype.hasKey = function(key){
  //buscamos la posicion
  let i = this.hash(key);
  //si hay algo devuelve true
  return this.buckets[i].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
