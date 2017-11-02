const expect = require('chai').expect
const ope_calculadoraJS_sumar = require('..').sumar
const ope_calculadoraJS_restar = require('..').restar
const ope_calculadoraJS_multiplicar = require('..').multiplicar
const ope_calculadoraJS_dividir = require('..').dividir


describe('#ope_calculadoraJS', function(){
  it('Sumar 200 + 300', function(){
    const sum = ope_calculadoraJS_sumar(200,300);
    expect(sum==500);
  });
  it('Restar 700 - 500', function(){
    const sum = ope_calculadoraJS_restar(700,500);
    expect(sum==200);
  });
  it('Multiplicar 600 * 700', function(){
    const sum = ope_calculadoraJS_sumar(600,700);
    expect(sum==420000);
  });
  it('Dividir 800 / 100', function(){
    const sum = ope_calculadoraJS_sumar(800,100);
    expect(sum==8);
  });
})
