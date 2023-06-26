import { Injectable } from '@angular/core';
import { Parametro } from '../interfaces/noticia-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getNoticias( parametros: Parametro ):Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=62977a04b5bf4977bdc0d6ed8d4ff82c`

    return this.http.get(url);
  }

}
