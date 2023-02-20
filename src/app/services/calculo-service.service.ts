import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoServiceService {

  constructor() { }


  serie = (n:number):number => {
    return (this.fibonacci(n)+this.triangular(n)+this.primo(n));
  }

  fibonacci = (n:number):number => {

    let n1 = 0, n2 = 1, nextTerm;
    let res=0;


    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        res=n1;
        n1 = n2;
        n2 = nextTerm;
    }

    return res;
  }

  
  /*
  Formula
  tringular = (n^2 + n)/2
  */
  triangular = (n:number):number => {
    return (Math.pow(n, 2) + n)/2;
  }

  /*
  Primo
  */
  primo = (n:number):number => {
    return this.primoFor(n+1);
  }

  primoFor = (n:number):number =>{
    var k = 2;
    let numPrimo=0;
      for (k;k>0;k++){
        if (this.esPrimo(k)){
          numPrimo++;
          if (numPrimo===n){
            return k;
          }
        }
      }
    return -1;
  }
  

  esPrimo = (i:number):boolean=>{
    var j:number;
    var x:number;

    if (i%2 == 0) {
        return i===2? true : false;
      
    }
    else {
      x=Math.sqrt(i);
      j=3;
      while ((j<=x) && (i%j!=0)){ 
        j=j+2;
      }
      return j>x? true : false;
    }
  }

}
