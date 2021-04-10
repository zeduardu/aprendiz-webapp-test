import { Observable } from 'rxjs';

export interface ICrud<T> {
  // BREAD
  read(id: string): Observable<T>;
  browse(): Observable<T[]>;
  addOrEdit(item: T): Promise<T>;
  delete(id: string): Promise<void>;
}
