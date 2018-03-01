import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { AbcComponent} from './components/abc/abc.component';
import { InheritanceComponent} from './components/inheritance/inheritance.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { GithubFollowersComponent } from './components/githubfollowers/githubfollowers.component';
import { GithubProfileComponent } from './components/githubprofile/githubprofile.component';
import { AuthGuard } from './providers/auth-guard.service';
import { CoursesComponent } from './components/courses/courses.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { title: 'My Calendar' } },
  { path: 'test1', component: HttpWithObservablesComponent },
  { path: 'test2', component: HttpWithPromisesComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'courses', component: CoursesComponent },
  // { path: 'courses', component: NewCourseFormComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'followers/:username', component: GithubProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'email', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup2', component: Signup2Component },
  { path: 'userdetail/:id/:username', component: UserdetailComponent},
  { path: '**', component: PageNotFoundComponent }
  // { path: 'login', component: LoginComponent },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'about', component: AboutComponent, data: { title: 'My Calendar' }, canActivate: [AuthGuard] },
  // { path: 'test1', component: HttpWithObservablesComponent, canActivate: [AuthGuard] },
  // { path: 'test2', component: HttpWithPromisesComponent, canActivate: [AuthGuard] },
  // { path: 'courses', component: NewCourseFormComponent, canActivate: [AuthGuard] },
  // { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  // { path: 'followers/:username', component: GithubProfileComponent },
  // { path: 'followers', component: GithubFollowersComponent },
  // { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  // { path: 'email', component: EmailComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'signup2', component: Signup2Component },
  // { path: 'userdetail/:id/:username', component: UserdetailComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
