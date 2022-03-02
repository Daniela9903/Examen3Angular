import { Component } from '@angular/core';
import { UniversidadesService } from 'src/app/services/universidades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensajes: any[] = [];
  constructor(private universidadesService:UniversidadesService) {}

  termino: string ='';

  buscar() {
    console.log(this.termino);

    // this.universidadesService.buscarPais(this.termino)
    // .subscribe(resp =>{
    //   console.log(resp);
    // })


    
    this.universidadesService.buscarPais(this.termino)
    .subscribe((resp: any) =>{
    console.log(resp);
    this.mensajes = resp;
  })

  }

}
