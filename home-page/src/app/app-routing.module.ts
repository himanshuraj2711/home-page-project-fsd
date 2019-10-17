import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLandingComponent } from './login-landing/login-landing.component';
import { HomeImageComponent } from './home-image/home-image.component';
import {HeaderComponent } from './header/header.component'


const routes: Routes = [
  {path:'',component:HomeImageComponent},
  // {path:'', component:HeaderComponent },
  {path: 'login',component: LoginLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
