import { Model } from '../core/model';

export class Categoria extends Model {
  nome: string;

  constructor(id: string, nome: string) {
    super(id);
    this.nome = nome;
  }
}
