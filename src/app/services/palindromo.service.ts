import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cadena } from '../models/cadena.model';
import { Palindromo } from '../models/palindromo.model';

@Injectable({
  providedIn: 'root'
})
export class PalindromoService {

  private endPointPalindromos: string = "http://localhost:8080/api/v1/palindromos";
  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});


  constructor( private http: HttpClient ) { 
    console.log("Funcionando");
  }


  public getPalindromos(){
    return this.http.get(`${this.endPointPalindromos}/listar`)
      .pipe( map( data => {
        let palindromos = data['resultados'] as Palindromo[];
        return palindromos;
      }));
  }


  public create( cadena: Cadena){
    return this.http.post(`${this.endPointPalindromos}/crear`, cadena, {headers: this.headers});
  }

}
