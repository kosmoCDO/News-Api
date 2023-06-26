import { Component } from '@angular/core';
import { Noticias, Parametro } from './interfaces/noticia-interface';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private api: NoticiasService ) {}

  public listadoNoticias: any[] = [];
  public loading: boolean = false;

  public buscarNoticia( parametros: Parametro ):void {
    this.loading = true;

    this.api.getNoticias( parametros ).subscribe(( data ) => {
      this.loading = false;
      this.listadoNoticias = data.articles
    })
  }

}
