import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatProgressBarModule,
  MatToolbarModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
// While using formControl, you have to import ReactiveFormsModule to your imports array
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailComponent } from './components/email/email.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
// import { HighlightDirective } from './highlight.directive';

export const firebaseConfig = {
  apiKey: 'AIzaSyCy9HuK8-DkBdZWiJrwPSCscOoWJmBqLQ8',
  authDomain: 'logindemo-23f28.firebaseapp.com',
  databaseURL: 'https://logindemo-23f28.firebaseio.com',
  projectId: 'logindemo-23f28',
  storageBucket: 'logindemo-23f28.appspot.com',
  messagingSenderId: '70784148192'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmailComponent,
    PageNotFoundComponent,
    SignupComponent,
    Signup2Component,
    UserdetailComponent,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
