"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
  // 1 --- preguntamos si el valor ingrsado es mayor al actual
  if(value > this.value){
    //preguntamos si hay algo a la derecha del hijo del nodo
    if(!this.right){
      //en caso de estar vacio lo agrega
      this.right = new BinarySearchTree(value);
    } else{
      //si tiene algo usamos recursion para hacer las validaciones nuevamente
      this.right.insert(value);
    }
  }

  //2-- preguntmoas si el valor ingresao es menor al actual
  if(value < this.value){
    //preguntamos si hay algo a la derecha del hijo del nodo
    if(!this.left){
      //en caso de estar vacio lo agrega
      this.left = new BinarySearchTree(value);
    } else{
      //si tiene algo usamos recursion para hacer las validaciones nuevamente
      this.left.insert(value);
    }
  }
};


BinarySearchTree.prototype.contains = function(value){
  
  if(value === this.value){
    return true;
  }

  if(value > this.value){
    if(!this.right){
      return false;
    } else {
      return this.right.contains(value);
    }
  }

  if(value < this.value){
    if(!this.left){
      return false;
    } else {
      return this.left.contains(value);
    }
  }

};

BinarySearchTree.prototype.size = function(){
  //Si es null a la izq y a la derecha
  if(this.left === null && this.right === null){
    return 1;
  }
  //si es null solo a la derecha
  if(this.left !== null && this.right === null){
    return 1 + this.left.size();
  }
  //si es null solo a la izquierda
  if(this.left === null && this.right !== null){
    return 1 + this.right.size();
  }

  //si tengo elemnetos en ambos lados
  if(this.left !== null && this.right !== null){
    return 1 + this.left.size() + this.right.size();
  }
};


BinarySearchTree.prototype.depthFirstForEach = function(f, order){
  //order = in order
  //order = preorder
  //order = post order

  if(order === 'pre-order'){
    //root - izq - derecha
    f(this.value);
    if(this.left !== null){
      this.left.depthFirstForEach(f, order);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(f, order);
    }
  }
  else if(order === 'post-order'){
    //izq - der - root
    if(this.left !== null){
      this.left.depthFirstForEach(f, order);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(f, order);
    }
    f(this.value);
  }
  else {
    //izq - der - root
    
    if(this.left !== null){
      this.left.depthFirstForEach(f, order);
    }
    f(this.value);
    if(this.right !== null){
      this.right.depthFirstForEach(f, order);
    }
};
};


BinarySearchTree.prototype.breadthFirstForEach = function(f, array=[]){
  //Si tenemos algo a la izq lo agregamos al array
  if(this.left !== null){
    array.push(this.left);
  }
  //Si tenemos algo a la derecha lo agregamos al array
  if(this.right !== null){
    array.push(this.right);
  }

  //ejecutamos el valor actual
  f(this.value);

  //pregutamos si tenemos algo en el array y lo ejecutamos
  if(array.length > 0){
    array.shift().breadthFirstForEach(f, array);
  }


};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
