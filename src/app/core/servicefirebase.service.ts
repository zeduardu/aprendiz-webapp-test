import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICrud } from './icrud.interface';
import { Model } from './model';

export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {
  ref: AngularFirestoreCollection<T>;

  constructor(
    protected type: new () => T,
    protected firestore: AngularFirestore,
    public path: string
  ) {
    this.ref = this.firestore.collection<T>(this.path);
  }

  read(id: string): Observable<T> {
    const doc = this.ref.doc<T>(id);
    return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
  }

  browse(): Observable<T[]> {
    return this.ref.valueChanges();
  }

  addOrEdit(item: T): Promise<any> {
    if (!item) { throw new Error('Paramêtro inexistente!'); }
    if (!item.id) {
      return this.ref.add(item).then(
        res => {
          item.id = res.id;
          this.ref.doc(res.id).set(item);
        }
      );
    }
    return this.ref.doc(item.id).set(item);
  }

  delete(id: string): Promise<void> {
    return this.ref.doc(id).delete();
  }

  docToClass(snapshotDoc: any): T {
    const obj = {
      //id: snapshotDoc.id,
      ...(snapshotDoc.data() as T),
    };

    const typed = plainToClass(this.type, obj);
    return typed;
  }

}
