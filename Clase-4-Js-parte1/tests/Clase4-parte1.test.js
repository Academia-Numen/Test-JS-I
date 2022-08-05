/* eslint-disable no-undef */
const {
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
} = require('../tareas');

describe('devolverPrimerElemento(arr)', function() {
  it('Debería retornar el primer elemento en el array', function() {
    expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
    expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('devolverUltimoElemento(arr)', function() {
  it('Debería retornar el último elemento en el array', function() {
    expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
    expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('obtenerLargoDelArray(arr)', function() {
  it('Debería retornar la longitud del array', function() {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementarPorUno(arr)', function() {
  it('Debería retornar todos los valores del arreglo pero incrementados en uno', function() {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe('agregarItemAlFinalDelArray(arr, item)', function() {
  it('Debería retornar el arreglo entero pero con el item agregado en la última posición', function() {
    expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
    expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
  });
});

describe('agregarItemAlComienzoDelArray(arr, item)', function() {
  it('Debería retornar el arreglo entero pero con el item agregado en la primera posición', function() {
    expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
    expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
  });
});

describe('dePalabrasAFrase(words)', function() {
  it('Debería retornar una sola string con los valores del arreglo separados por espacios', function() {
    expect(dePalabrasAFrase(['Numen', 'JavaScript', 'Class'])).toBe('Numen JavaScript Class');
    expect(dePalabrasAFrase(['Numen'])).toBe('Numen');
  });
});

describe('arrayContiene(arr, item)', function() {
  it('Debería retornar true si el arreglo contiene el item', function() {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('agregarNumeros(numbers)', function() {
  it('Debería agregar todos los números en un arreglo y retornar el resultado total', function() {
    expect(agregarNumeros([10, 10, 16])).toBe(36);
    expect(agregarNumeros([97, 100])).toBe(197);
    expect(agregarNumeros([0])).toBe(0);
  });
});

describe('promedioResultadosTest(testScores)', function() {
  it('Debería retornar el promedio de todos los valores', function() {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('numeroMasGrande(numbers)', function() {
  it('Debería retornar el número más grande', function() {
    expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
    expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('cuentoElementos(arreglo)', function() {
  it('Debería retornar el numero de veces que encuentre números mayores a 18', function() {
    expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
    expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe('diaDeLaSemana(numeroDeDia)', function() {
  it('Debería retornar "Es dia laboral" o "Es fin de semana" según el número asociado', function() {
    expect(diaDeLaSemana(3)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(2)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(1)).toBe("Es fin de semana");
    expect(diaDeLaSemana(7)).toBe("Es fin de semana");
  });
});

describe('empiezaConNueve(n))', function() {
  it('Debería retornar true o false dependiendo si n empieza con 9', function() {
    expect(empiezaConNueve(98)).toBe(true);
    expect(empiezaConNueve(9)).toBe(true);
    expect(empiezaConNueve(2)).toBe(false);
    expect(empiezaConNueve(7)).toBe(false);
    expect(empiezaConNueve(-5)).toBe(false);
  });
});

describe('todosIguales(arreglo)', function() {
  it('Debería retornar true si todos los elementos del arreglo son iguales, caso contrario debería retornar false', function() {
    expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
    expect(todosIguales([97, 100, 190, 9])).toBe(false);
   
    expect(todosIguales([230, 230, 230, 230 ])).toBe(true);
  });
});

describe('mesesDelAño(array)', function() {
  it('Debería retornar un nuevo arreglo con los meses solicitados, caso contrario retorna "No se encontraron los meses pedidos"', function() {
    var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
    var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
    expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
    expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  });
});

describe('mayorACien(array)', function() {
  it('Debería retornar un arreglo solo con los valores mayores a 100', function() {
    var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
    expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
  });
});