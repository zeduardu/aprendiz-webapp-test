import { classToPlain } from 'class-transformer';

export abstract class Model {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  toObject(): object {
    const obj: any = classToPlain(this);
    delete obj.id;
    return obj;
  }
}
