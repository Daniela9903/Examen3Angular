import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {
  URL: string ='http://universities.hipolabs.com/search?country=';


  constructor(private http: HttpClient ) { }

  buscarPais( termino: string ):Observable<any>{
    const url = `${ this.URL }${ termino }`;
    return this.http.get( url );
  }

  getLista(){
    return this.http.get(this.URL);
    
  }
  
  
}
