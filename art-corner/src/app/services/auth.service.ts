import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,@Inject(PLATFORM_ID) private platformId: object) {
  }

  signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  signUp(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  signOut(){
    return this.afAuth.signOut();
  }
}
