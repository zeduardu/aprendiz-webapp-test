import { Model } from '../core/model';
import { Autor } from './autor.model';
import { Categoria } from './categoria.model';

export class Post extends Model {
  autor: Autor;
  dataPublicacao: any;
  ultimaAtualizacao: any;
  titulo: string;
  corpo: string;
  categoria: Categoria;

  constructor(id: string, autor: Autor, dataPublicacao: any, ultimaAtualizacao: any, titulo: string, corpo: string, categoria: Categoria) {
    super(id);
    this.autor = autor;
    this.dataPublicacao = dataPublicacao;
    this.ultimaAtualizacao = ultimaAtualizacao;
    this.titulo = titulo;
    this.corpo = corpo;
    this.categoria = categoria;
  }
}
