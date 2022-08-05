// /* eslint-disable no-undef */
'use strict'

const {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore
} = require('../tareas');

describe('counter', () => {
 it('Deberia retornar una funcion', () => {
   expect(typeof counter()).toBe('function');
 });
 it('Deberia retornar 1 cuando la funcion retornada sea invocada', () => {
   expect(counter()()).toBe(1);
 });
 it('Deberia incrementar y retornar el numero cada vez que la funcion sea invocada', () => {
   const counterFunction = counter();
   expect(counterFunction()).toBe(1);
   expect(counterFunction()).toBe(2);
   expect(counterFunction()).toBe(3);
   expect(counterFunction()).toBe(4);
   expect(counterFunction()).toBe(5);
 });
 it('Deberia tener dos acumuladores diferentes if dos COUNTERS son creados', () => {
   const counterOne = counter();
   const counterTwo = counter();
   expect(counterOne()).toBe(1);
   expect(counterOne()).toBe(2);
   expect(counterOne()).toBe(3);
   expect(counterOne()).toBe(4);
   expect(counterTwo()).toBe(1);
   expect(counterTwo()).toBe(2);
 });
});

describe('cacheFunction(cb)', function() {
 const cb = function(x) {
   return x * 2;
 };
 it('Deberia retornar una funcion de callback', function() {
   expect(typeof cacheFunction(cb)).toEqual('function');
 });
 it('Deberia retornar el resultado de la funcion de callback cuando la funcion cache sea invocada', function() {
   const cachedFunction = cacheFunction(cb);
   expect(cachedFunction(5)).toBe(10);
 });
 it('Deberia crear un cache para la funcion cb', function() {
  const cachedFunction = cacheFunction(cb);
  var resultOne = cachedFunction(2);
  expect(resultOne).toBe(4);
  var resultTwo = cachedFunction(3);
  expect(resultTwo).toBe(6);
  var resultTwo = cachedFunction(2);
  expect(resultTwo).toBe(4);
});
 it('Deberia evitar llamar a la funcion cb cuando no sea necesario', function() {
   const cb = jest.fn();
   const cachedFunction = cacheFunction(cb);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(true);
   cachedFunction(10);
   cachedFunction(10);
   cachedFunction(10);
   cachedFunction(10);
   expect(cb).toHaveBeenCalledTimes(2);
 });
});
