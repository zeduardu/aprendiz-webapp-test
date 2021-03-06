import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: Observable<firebase.User | null>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  login(email: string, senha: string): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, senha);
  }

  logout(): Promise<void> {
    return this.angularFireAuth.signOut();
  }

  resetarSenha(email: string): Promise<void> {
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }

  athenticatedUser(): Observable<firebase.User | null> {
    return this.user;
  }
}
