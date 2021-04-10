import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { Autor } from '../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService extends ServiceFirebase<Autor> {

  constructor(firebase: AngularFirestore) {
    super(Autor, firebase, 'autores');
  }
}
