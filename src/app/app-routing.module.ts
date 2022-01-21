import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cal',component:CalculatorComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'login',component:LoginUserComponent},
  {path:'loan/:id',component:ApplyLoanComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'deposit/:id',component:DepositComponent},
  {path:'details/:id',component:UserDetailsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
