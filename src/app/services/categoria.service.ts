import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends ServiceFirebase<Categoria> {

  constructor(firestore: AngularFirestore) {
    super(Categoria, firestore, 'categorias');
  }
}
