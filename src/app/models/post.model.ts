import { Model } from '../core/model';
import { Autor } from './autor.model';
import { Categoria } from './categoria.model';

export class Post extends Model {
  author: Autor = new Autor();
  publicationDate: any;
  lastUpdate: any;
  title!: string;
  body!: string;
  category: Categoria = new Categoria();
}
