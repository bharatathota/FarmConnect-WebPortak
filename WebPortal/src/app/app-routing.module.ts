import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page's and components modules
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'login' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'register' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'sidemenu' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
