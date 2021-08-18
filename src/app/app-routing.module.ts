import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AngularInterviewComponent } from './components/angular-interview/angular-interview.component';
import { ProductsComponent } from './components/products/products.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthGuard } from "./shared/auth.guard";
import { ResolveGuard } from './_guards/resolve.guard';


const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'all-user', component: AllUsersComponent ,  canActivate: [AuthGuard]},
  { path:'prodcuts', component:ProductsComponent,  resolve: {products: ResolveGuard}  },
  { path:'angular-interview', component:AngularInterviewComponent},
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
