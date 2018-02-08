import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authState: any = null;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  loginWithEmail(email: string, pass: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }
  githubLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }
  signupWithEmailAndPass(email: string, pass: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  isLoggedIn() {
    let jwtHelper = new JwtHelper();

    return this.afAuth.idToken
      .subscribe(response => {
        let token = response;

        let expirationDate = jwtHelper.getTokenExpirationDate(token);
        let isExpired = jwtHelper.isTokenExpired(token);
        console.log('expirationDate: ' + expirationDate);
        console.log('isExpired: ' + isExpired);
        console.log(token);
      });
  }

  get currentUser() {
    return new JwtHelper().decodeToken('eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwZmNmN2UwNWIxYTQxNWMxYzI0NmZlOWZiN2M5ZWI0OWRmZjM3MGYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG9naW5kZW1vLTIzZjI4IiwibmFtZSI6IkthdXNoYWwgS3VtYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1tMG1ZLW9HMmVKNC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFGOC9oYjRkdUFLTEU0dy9waG90by5qcGciLCJhdWQiOiJsb2dpbmRlbW8tMjNmMjgiLCJhdXRoX3RpbWUiOjE1MTgwMDA4MzAsInVzZXJfaWQiOiJIcjZQcHFGMmgwaDJZekduaWx4U3ptOW1xZVYyIiwic3ViIjoiSHI2UHBxRjJoMGgyWXpHbmlseFN6bTltcWVWMiIsImlhdCI6MTUxODAxNzMyNywiZXhwIjoxNTE4MDIwOTI3LCJlbWFpbCI6Imtya2F1c2hhbDAwN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMzQ3MDExNDUxMTUxNzcxMDU5MCJdLCJlbWFpbCI6WyJrcmthdXNoYWwwMDdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.B-6PJ8tRBuhbIahi0jlmcCU1knpQjJbub2ZXCtlIi0ESmNqQAGRIViVBnDyoGjpSG9znmAMeAbuM-_19LqO67VzJ8LM46T0F2eFSrLEIq3hwsv1vRK3V0LnUg9qOc2nKNPGEwGY4CkMmJ8b2INGG14auVhZPnhcPMWBDwYbFK9T4Hy2GwCSTrbEPzljap3wCzxiIGFFSzW8sYmW-p-I5ySs0ulDIBgqqy8Hm-lb0F-ovWHvkrNLFFyCDxasUbyJiLRqqnydq6ZQ31DKeyiRcw_voKvuXNlPBvZ0e0SFzAye54Omipx0uZjBNxYKmuUWVuVcDSnGM_VIGl4Pj-AqnTg');
  }
}
