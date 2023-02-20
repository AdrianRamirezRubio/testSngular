import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { CalculoServiceService } from '../../services/calculo-service.service';





@Component({
  selector: 'app-calculo-component',
  templateUrl: './calculo-component.component.html',
  styleUrls: ['./calculo-component.component.css']
})
export class CalculoComponentComponent implements OnInit{

  resultado!: string;
  resnumero!: any;

  constructor(private calculo:CalculoServiceService,private fb: FormBuilder){}



  ngOnInit(): void {
    
  }

  formnum = this.fb.group({
    numero: ['', [Validators.required, Validators.max(100)]]
  });

  calcularSerie() {
    
    if (this.formnum.valid ){
      this.resnumero=this.formnum.get('numero')?.value;
      this.resultado = ''+this.calculo.serie(  this.resnumero );
     

    }
    else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
      
  }

  validateFormat(e:any) {
    let key;
    if (e.type === 'paste') {
      key = e.clipboardData.getData('text/plain');
    } else {
      key = e.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]/;
     if (!regex.test(key)) {
      e.returnValue = false;
       if (e.preventDefault) {
        e.preventDefault();
       }
     }
    }
}
