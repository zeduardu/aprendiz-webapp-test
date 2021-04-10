import { Model } from '../core/model';

export class Autor extends Model {
  nome!: string;
  email!: string;
  ultimoAcesso!: Date;
}
