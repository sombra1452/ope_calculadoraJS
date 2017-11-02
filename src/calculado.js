import ope_calculadorajs from 'ope_calculadorajs'

export default function ope_calculadorajs(N, M){

  var ops = {
       function sumarNumeros(n1 = N, n2 = M) {
          return (n1 + n2);
      },

      function restarNumeros(n1 = N, n2 = M) {
          return (n1 - n2);
      },

       function multiplicarNumeros(n1 = N, n2 = M) {
          return (n1 * n2);
      },

       function dividirNumeros(n1 = N, n2 = M) {
          return (n1 / n2);
      }
  };
}
