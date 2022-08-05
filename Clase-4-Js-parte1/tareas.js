// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // for (let i = 0; i < array.length; i++){
  //   array [i] = array [i] + 1;
  // }
  // return array;

  for (let i = 0; i < array.length; i++){
    array[i]++;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  // let frase ='';
  // for (let i = 0; i < palabras.length; i++){
  //   if (i !== palabras.length - 1){
  //     frase = frase + palabras[i] + ' ';
  //   }else{
  //     frase = frase + palabras[i];
  //   }
  // }
  // return frase; 

  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  // for (let i = 0; i < array.length; i++){
  //   if (array[i] === elemento){
  //     return true;
  //   }
  // }
  // return false;

  for (let elementoDelArray of array){
    if (elementoDelArray === elemento){
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // let numerosSumados = 0;

  // for (let i = 0; i < numeros.length; i++){
  //   numerosSumados = numerosSumados + numeros [i];
  // }
  // return numerosSumados;

  let sumaDeNumeros = numeros.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
  },0);
  return sumaDeNumeros;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  // return agregarNumeros(resultadosTest) / resultadosTest.length;

  let sumaDeNumeros = resultadosTest.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
  },0);
  return sumaDeNumeros / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  // let masGrande = 0;

  // for (let i = 0; i < numeros.length; i++){
  //   if (masGrande < numeros[i]){
  //     masGrande = numeros[i];
  //   }
  // }
  // return masGrande;


  let numeroMasGrande = numeros.reduce(function(previousValue, currentValue){
    if (previousValue > currentValue){
      return previousValue;
    }else{
      return currentValue;
    }
  },0);
  return numeroMasGrande;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí

  // let contador = 0;

  // for(let i = 0; i < arreglo.length; i++){
  //   if (arreglo[i] > 18){
  //     contador++;
  //   }
  // }
  // return contador;

  let contador = 0;

  for (let elemento of arreglo){
    if (elemento > 18){
      contador++;
    } 
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }else{
    return 'Es dia Laboral';
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let numero = n.toString();
  if (numero.charAt(0) === '9'){
    return true;
  }else{
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  // for(let i = 0; i < arreglo.length - 1; i++){
  //   if (arreglo[i] !== arreglo[i+1] ){
  //       return false;
  //   }
  // }
  // return true;

  let valor = arreglo[0];
  let iguales = arreglo.every(function (elemento){
    return valor === elemento;
  });

  return iguales;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:


  // let tresMeses = [];
  
  // for(let i = 0; i < array.length; i++){
  //   if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
  //     tresMeses.push(array[i]);
  //   }  
  // }

  // if (tresMeses.length < 3){
  //     return "No se encontraron los meses pedidos";
  // }else {
  //   return tresMeses;
  // }

  let nuevoArray = [];
  array.forEach(element => {
    if (element === "Enero" || element === "Marzo" || element === "Noviembre"){
      nuevoArray.push(element);
    }
  });
  
  if (nuevoArray.length < 3){
    return "No se encontraron los meses pedidos";
  }else{
    return nuevoArray;
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  // let nuevoArray = [];

  // for (let i = 0; i < array.length; i++){
  //   if (array[i] > 100){
  //     nuevoArray.push(array[i]);
  //   }
  // }
  // return nuevoArray;

  let nuevoArray = [];
  array.forEach(element => {
    if (element > 100 ){
      nuevoArray.push(element);
    }
  });
  return nuevoArray;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
