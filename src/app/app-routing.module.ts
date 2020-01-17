import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './add/add.component';
import { AppGuard } from './guard/app.guard';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AppGuard]},
  {path: 'details/:city', component: DetailsComponent, canActivate: [AppGuard]},
  {path: 'add', component: AddComponent, canActivate: [AppGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
