import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatProgressBarModule,
  MatToolbarModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
// For using formControl, you have to import ReactiveFormsModule to your imports array
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
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
import { AbcComponent } from './components/abc/abc.component';
import { InheritanceComponent } from './components/inheritance/inheritance.component';
import { HttpApiComponent } from './components/http-api/http-api.component';
import { HttpWithPromisesComponent } from './components/http-with-promises/http-with-promises.component';
import { HttpWithObservablesComponent } from './components/http-with-observables/http-with-observables.component';
import { SummaryPipe } from './shared/pipe/summary.pipe';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { BootstrapPanelComponent } from './components/bootstrap-panel/bootstrap-panel.component';
import { CardComponent } from './components/card/card.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './components/githubfollowers/githubfollowers.component';
import { GithubProfileComponent } from './components/githubprofile/githubprofile.component';
import { AuthGuard } from './providers/auth-guard.service';

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
    AbcComponent,
    InheritanceComponent,
    HttpApiComponent,
    HttpWithPromisesComponent,
    HttpWithObservablesComponent,
    SummaryPipe,
    FavouriteComponent,
    BootstrapPanelComponent,
    CardComponent,
    InputFormatDirective,
    NewCourseFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    // Tip: use FormsModule for template-driven, and ReactiveFormsModule for reactive forms.
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    // AngularFirestoreModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent],
  // schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
