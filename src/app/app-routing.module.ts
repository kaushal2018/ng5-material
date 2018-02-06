import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpWithPromisesComponent } from './components/http-with-promises/http-with-promises.component';
import { HttpWithObservablesComponent } from './components/http-with-observables/http-with-observables.component';
import { EmailComponent } from './components/email/email.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import {AbcComponent} from './components/abc/abc.component';
import {InheritanceComponent} from './components/inheritance/inheritance.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { title: 'My Calendar' } },
  { path: 'test1', component: HttpWithObservablesComponent },
  { path: 'test2', component: HttpWithPromisesComponent },
  { path: 'courses', component: NewCourseFormComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contact', component: ContactComponent },
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
