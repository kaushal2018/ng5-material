import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailComponent } from './components/email/email.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import {AbcComponent} from './components/abc/abc.component';
import {InputComponent} from './components/input/input.component';
// import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'login', component: InputComponent },
  // { path: 'login', component: AbcComponent },
  // { path: 'login', component: CardComponent },
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'email', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup2', component: Signup2Component },
  { path: 'userdetail/:id/:username', component: UserdetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
