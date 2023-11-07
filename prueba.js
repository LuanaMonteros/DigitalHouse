function noParesDeContarImparesHasta(numero) {
  for( let i= 0 ; i <= numero ; i++){
       let impares = 0;
       let impar = i % 2;
      if(impar =! 0){
          impares ++;
      }
      return impares;
      
  }
}
console.log(noParesDeContarImparesHasta(0));
