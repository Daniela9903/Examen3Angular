import { Component, OnInit } from '@angular/core';
import { UniversidadesService } from 'src/app/services/universidades.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  mensajes: any[] = [];
  constructor(private universidadesService:UniversidadesService) { }

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

  ngOnInit(): void {

  //   this.universidadesService.getLista()
  //   .subscribe((posts: any) =>{
  //   console.log(posts);
  //   this.mensajes = posts;
  // })

  
 
}
}
