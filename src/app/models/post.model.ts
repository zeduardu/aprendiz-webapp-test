import { Model } from '../core/model';
import { Autor } from './autor.model';
import { Categoria } from './categoria.model';

export class Post extends Model {
  autor: Autor = new Autor();
  dataPublicacao: any;
  ultimaAtualizacao: any;
  titulo!: string;
  corpo!: string;
  categoria: Categoria = new Categoria();
}
