import { Component, OnInit } from '@angular/core';
import { Cadena } from 'src/app/models/cadena.model';
import { Palindromo } from 'src/app/models/palindromo.model';
import { PalindromoService } from 'src/app/services/palindromo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent implements OnInit {

  public text: string;
  public palindromos: Palindromo[];

  constructor( private palindromoService: PalindromoService) { 
    this.text = '';
    this.getResults();
  }

  getResults(){
    this.palindromoService.getPalindromos()
      .subscribe( resp =>{
        this.palindromos = resp;
      }, error =>{
        let errorRessp = error.error;
      });
  }

  ngOnInit(): void {
  }

  create(){
    let cadena = new Cadena();
    cadena.text = this.text;

    this.palindromoService.create(cadena)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Guardado!',
          text: "'" + this.text + `' ${ (resp['palindromo'])? 'SI':'NO' }` + " es un palíndromo",
        })
        this.text='';
        this.getResults();
      }, error =>{
        let errorResp = error.error;

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorResp.message,
        })

      });
  }

}
