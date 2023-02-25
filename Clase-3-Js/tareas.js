// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  return Math.max(x,y);
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return (edad >= 18) ? "Allowed" : "Not allowed";
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  }
  return "Offline";
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  switch (idioma) {
    case "aleman": return "Guten Tag!";
    case "mandarin": return "Ni Hao!";
    case "ingles": return "Hello!";
    default: return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  let resultado;

  //To solve the problem of a lot of return statements uses a local variable and use only 1 return
  switch (color) {
    case "blue": {
      resultado = "This is blue";
      break;
    }
    case "red": {
      resultado = "This is red";
      break;
    }
    case "green": {
      resultado = "This is green";
      break;
    }
    case "orange": {
      resultado = "This is orange";
      break;
    }
    default: {
      resultado = "Color not found";
      break;
    }
  }

  return resultado;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  return ((numero === 5) || (numero === 10));
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  return ((numero > 20) && (numero < 50));
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`

  // If numero rounded down is the same at numero then is a int
  return (numero === Math.floor(numero));
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let resultado;

  if ((numero % 3 === 0) && (numero % 5 === 0)) {
    resultado = "fizzbuzz";
  } else if (numero % 3 === 0) {
    resultado = "fizz";
  } else if (numero % 5 === 0) {
    resultado = "buzz";
  } else {
    return numero;
  }
  return resultado;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  let result = false;

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    result = "Error";
  } else if (Math.min(num1, num2, num3) < 0) {
    result = "Hay negativos";
  } else if ((Math.max(num1, num2, num3) === num1) && (num1 > 0)) {
    result = "Número 1 es mayor y positivo";
  } else if (Math.max(num1, num2, num3) === num3) {
    result = ++num3;
  }
  return result;
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  return (valor === true) ? "Soy verdadero" : "Soy falso";
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
  if ((numero / 100) > 10 || (numero / 100) < 1) {
    return false;
  }
  return true;
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  let count = 0;

  //Only is need to execute the iteration if number is not a 0 or 1
  if ((numero != 1) && (numero != 0)) {
    for (i = 1; i <= numero; i++) {
      if ((numero % i) == 0) {
        count++;
      }
    }

    //If count != 2 then number is not a prime number
    if (count === 2) {
      return true;
    }
  } 
    //If the interpreter get to this line number is not a prime number
    return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let count = 1
  do {
    numero += 5;
    count++;
  } while (count <= 8);

  return numero;
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};