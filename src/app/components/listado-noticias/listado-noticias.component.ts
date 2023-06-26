import { Component, Input } from '@angular/core';


@Component({
  selector: 'listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {

@Input()
public listadoDeNoticias: any[] = [];



}
