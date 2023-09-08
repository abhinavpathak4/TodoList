import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { ErrorComponent } from './pages/error/error.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthenticationGuard]},
  // {path : 'details', loadComponent:() => import('./pages/details/details.component').then(Component => Component.DetailsComponent)},
  {path: 'details', component:DetailsComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
