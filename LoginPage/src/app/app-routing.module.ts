import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ParentsLoginComponent } from './parents-login/parents-login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path : 'admin-login', component : AdminLoginComponent },
  { path : 'staff-login', component : StaffLoginComponent },
  { path : 'student-login', component : StudentLoginComponent },
  { path : 'parents-login', component : ParentsLoginComponent },
  { path : 'home-page', component : HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AdminLoginComponent, StaffLoginComponent, StudentLoginComponent, ParentsLoginComponent, HomePageComponent ]

