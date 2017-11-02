"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ope_calculadoraJS;
function ope_calculadoraJS(N, M) {

    var ops = {
        sumar: function sumarNumeros() {
            var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : N;
            var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : M;

            return n1 + n2;
        },

        restar: function restarNumeros() {
            var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : N;
            var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : M;

            return n1 - n2;
        },

        multiplicar: function multiplicarNumeros() {
            var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : N;
            var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : M;

            return n1 * n2;
        },

        dividir: function dividirNumeros() {
            var n1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : N;
            var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : M;

            return n1 / n2;
        }
    };
}