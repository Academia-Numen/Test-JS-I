/* eslint-disable no-undef */
const {
    crearUsuario,
	agregarMetodoPrototype,
	agregarStringInvertida,
	crearInstanciaPersona,
	agregarMetodo,
	Persona
} = require('../tareas');

describe('crearUsuario()', function() {
	it('Deberia retornar un user constructor que correctamente construya objetos user', function() {
		const Usuario = crearUsuario();
		const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
		expect(user.usuario).toBe('jssamuel');
		expect(user.nombre).toBe('Samuel');
		expect(user.email).toBe('samuel@email.com');
		expect(user.password).toBe('LoveJS');
    	expect(user.saludar()).toBe('Hola, mi nombre es Samuel');
	});
});

describe('agregarMetodoPrototype(Constructor)', function() {
	it('Deberia agregar el metodo saludar al constructor', function() {
		function Test() {
			this.test = true;
		}
		agregarMetodoPrototype(Test);
		const test = new Test();
		expect(test.saludar()).toBe('Hello World!');
	});
});

describe('agregarStringInvertida(StringPrototype)', function(){
	it('Deberia agregar un metodo de String Inveritido al StringPrototype que regresa a una version invertida del string', function() {
		agregarStringInvertida();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});

describe('crearInstanciaPersona()', function() {
	it('Deberia retornar una nueva instancia de PERSONA', function() {
		expect(crearInstanciaPersona("Juan", "Pérez", 22, "Saavedra 123")).toBeInstanceOf(Persona);
	});
});

describe('agregarMetodo(Persona)', function() {
	it('Deberia agregar el metodo DATOS al constructor', function() {
		agregarMetodo();
		const persona = new Persona("Juan", "Pérez", 22, "Saavedra 123");
		expect(persona.datos()).toBe('Juan, 22 años');
	});
});

