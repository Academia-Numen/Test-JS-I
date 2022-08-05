/* eslint-disable no-undef */
const {
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
} = require('../tareas');

describe('🔷Ejercicios Esenciales🔷', function() {
  describe('obtenerMayor(x, y)', function() {
    it('Debería retornar x si es más grande que y', function() {
      expect(obtenerMayor(10, 5)).toBe(10);
    });
    it('Debería retornar y si es más grande que x', function() {
      expect(obtenerMayor(50, 100)).toBe(100);
    });
    it('Debería retornar cualquiera de los 2 si son iguales', function() {
      expect(obtenerMayor(1000, 1000)).toBe(1000);
    });
  });
  describe('mayoriaDeEdad(edad)', function() {
    it('Debería retornar \'Allowed\' Si la edad es mayor o igual que 18', function() {
      expect(mayoriaDeEdad(18)).toBe('Allowed');
      expect(mayoriaDeEdad(35)).toBe('Allowed');
    });
    it('Debería retornar \'Not allowed\' si la edad es menor que 18', function() {
      expect(mayoriaDeEdad(7)).toBe('Not allowed');
    });
  });
  describe('conection(status)', function() {
    it('Debería retornar la conexión del usuario', function() {
      expect(conection(1)).toBe('Online');
      expect(conection(2)).toBe('Away');
      expect(conection(3)).toBe('Offline');
      expect(conection()).toBe('Offline');
    });
  });
  describe('saludo(idioma)', function() {
    it('Debería retornar \'Guten Tag!\' para aleman', function() {
      expect(saludo('aleman')).toBe('Guten Tag!');
    });
    it('Debería retornar \'Hola!\' para ingles', function() {
      expect(saludo('ingles')).toBe('Hello!');
    });
    it('Debería retornar \'Ni Hao!\' para mandarin', function() {
      expect(saludo('mandarin')).toBe('Ni Hao!');
    });
    it('Debería retornar \'Hola!\' Si no se especificó ninguno de los idiomas.', function() {
      expect(saludo('frances')).toBe('Hola!');
      expect(saludo()).toBe('Hola!');
    });
  });
  describe('colors(color)', function() {
    it('Debería retornar \'This is {color}\'', function() {
      expect(colors("blue")).toBe('This is blue');
      expect(colors("red")).toBe('This is red');
      expect(colors("green")).toBe('This is green');
      expect(colors("orange")).toBe('This is orange');
    });
    it('Debería retornar \'Color not found\' Si no se mencionó ninguno de los argumentos anteriores', function() {
      expect(colors()).toBe('Color not found');
      expect(colors("pink")).toBe('Color not found');
    });
  });
  describe('esDiezOCinco(num)', function() {
    it('Debería retornar true si num es 5 o 10', function() {
      expect(esDiezOCinco(10)).toBe(true);
      expect(esDiezOCinco(5)).toBe(true);
    });
    it('Debería retornar false en el caso contrario', function() {
      expect(esDiezOCinco(11)).toBe(false);
      expect(esDiezOCinco(6)).toBe(false);
      expect(esDiezOCinco(0)).toBe(false);
      expect(esDiezOCinco(5.01)).toBe(false);
    });
  });
  describe('estaEnRango(num)', function() {
    it('Debería retornar true si num está dentro del rango', function() {
      expect(estaEnRango(35.5)).toBe(true);
      expect(estaEnRango(40)).toBe(true);
      expect(estaEnRango(49)).toBe(true);
      expect(estaEnRango(21)).toBe(true);
    });
    it('Debería retornar false en caso contrario', function() {
      expect(estaEnRango(10)).toBe(false);
      expect(estaEnRango(20)).toBe(false);
      expect(estaEnRango(50)).toBe(false);
      expect(estaEnRango(100)).toBe(false);
    });
  });
  describe('esEntero(num)', function() {
    it('Debería retornar true si num es 5', function() {
      expect(esEntero(5)).toBe(true);
    });
    it('Debería retornar false si num es 0.5', function() {
      expect(esEntero(0.5)).toBe(false);
    });
    it('Debería retornar true si num es -20', function() {
      expect(esEntero(-20)).toBe(true);
    });
    it('Debería retornar true para 0', function() {
      expect(esEntero(0)).toBe(true);
    });
  });
  describe('fizzBuzz(num)', function() {
    it('Debería retornar fizz si num es divisible por 3', function() {
      expect(fizzBuzz(9)).toBe('fizz');
    });
    it('Debería retornar buzz si num es divisible por 5', function() {
      expect(fizzBuzz(10)).toBe('buzz');
    });
    it('Debería retornar fizzbuzz si num es divisible por 3 y 5', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Debería retornar num sino es divisible por 3 o 5', function() {
      expect(fizzBuzz(4)).toBe(4);
    });
  });
  describe('operadoresLogicos(num1, num2, num3)', function() {
    it('Debería retornar \'Número 1 es mayor y positivo\' si num1 es positivo y si es mayor que num2 y num3', function() {
      expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
    });
    it('Debería retornar \'Hay negativos\' si alguno de los argumentos son negativos', function() {
      expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
    });
    it('Debería retornar num3 + 1 si num3 es mayor que num1 y num2', function() {
      expect(operadoresLogicos(1, 3, 10)).toBe(11);
    });
    it('Debería retornar \'Error\' Si alguno de los argumentos es 0', function() {
      expect(operadoresLogicos(1, 0, 10)).toBe('Error');
    });
    it('Debería retornar false si no se cumplen ninguna de las condiciones', function() {
      expect(operadoresLogicos(10, 30, 6)).toBe(false);
    });
  });
  describe ('esVerdadero(valor)', function() {
    it('Debería retornar Soy verdadero si valor es true', function() {
      expect(esVerdadero(true)).toBe("Soy verdadero");
    });
    it('Debería retornar Soy falso si valor es false', function() {
      expect(esVerdadero(false)).toBe("Soy falso");
    });
  });
  describe ('tieneTresDigitos(numero)', function() {
    it('Debería retornar true si numero tiene 3 digitos', function() {
      expect(tieneTresDigitos(100)).toBe(true);
      expect(tieneTresDigitos(820)).toBe(true);
      expect(tieneTresDigitos(900)).toBe(true);
      expect(tieneTresDigitos(10)).toBe(false);
      expect(tieneTresDigitos(20000)).toBe(false);
    });
  });
});

describe('🥇Puntos Extra🥇', function() {
  describe('esPrimo(num)', function() {
    it('Debería retornar true si num es primo', function() {
      expect(esPrimo(7)).toBe(true);
      expect(esPrimo(97)).toBe(true);
    });
    it('Debería retornar false si num no es primo', function() {
      expect(esPrimo(10)).toBe(false);
      expect(esPrimo(100)).toBe(false);
      expect(esPrimo(0)).toBe(false);
      expect(esPrimo(1)).toBe(false);
    });
  });
  
  describe('doWhile(numero)', function() {
    it('Debería agregar 5 a numero hasta llegar a un límite de 8 veces y retornar la suma total', function() {
      expect(doWhile(5)).toBe(45);
      expect(doWhile(100)).toBe(140);
      expect(doWhile(-1)).toBe(39);
    });
  });
});