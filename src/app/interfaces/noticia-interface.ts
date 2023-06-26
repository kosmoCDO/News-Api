export interface Filtro {
  value: string;
  nombre: string;
}

export interface Parametro {
  categoria: string,
  pais: string,
}


/*  */
export interface Noticias {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      Author;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

export type Author = "BBC News";

export interface Source {
    id:   ID;
    name: Author;
}

export type ID = "bbc-news";
