import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

export interface IUserLogin {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged((state) => {
      console.log('onAuthStateChanged ', state);
      if (state) {
        this.isLoggedIn$.next(true);
      } else {
        this.isLoggedIn$.next(false);
      }
    });
  }

  async signWithEmailAndpassword(params: IUserLogin) {
    return await this.afAuth.signInWithEmailAndPassword(
      params.email,
      params.password
    );
  }

  async signOut() {
    await this.afAuth.signOut();
    this.isLoggedIn$.next(false);
  }
}
