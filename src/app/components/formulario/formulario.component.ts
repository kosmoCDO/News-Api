import { Component, EventEmitter, Output } from '@angular/core';

import { Filtro, Parametro} from '../../interfaces/noticia-interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  public dataNoticia: EventEmitter<Parametro> = new EventEmitter();

  public categoriaSeleccionada: string = '';
  public paisSeleccionado: string = '';

  public categorias: Filtro[] = [
    {
      value: 'general',
      nombre: 'General'
    },
    {
      value: 'business',
      nombre: 'Negocios'
    },
    {
      value: 'entertainment',
      nombre: 'Entretenimientos'
    },
    {
      value: 'science',
      nombre: 'Ciencia'
    },
    {
      value: 'sports',
      nombre: 'Deporte'
    }
  ];

  public paises: Filtro[] = [
    {
      value: 'co',
      nombre: 'Colombia'
    },
    {
      value: 'ar',
      nombre: 'Argentina'
    },
    {
      value: 'ch',
      nombre: 'Suiza'
    },
    {
      value: 'mx',
      nombre: 'Mexico'
    },
    {
      value: 've',
      nombre: 'Venezuela'
    },
    {
      value: 'us',
      nombre: 'Estados Unidos'
    },

  ];

  public buscarNoticia():void {
    this.dataNoticia.emit({
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    });

  }


}
