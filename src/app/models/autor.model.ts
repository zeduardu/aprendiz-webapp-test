import { Model } from '../core/model';

export class Autor extends Model {
  nome: string;
  email: string;
  ultimoAcesso: Date;

  constructor(id: string, nome: string, email: string, ultimoAcesso: Date) {
    super(id);
    this.nome = nome;
    this.email = email;
    this.ultimoAcesso = ultimoAcesso;
  }
}
