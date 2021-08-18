import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AngularInterviewComponent } from './components/angular-interview/angular-interview.component';
import {  MarkAsteriskDirectiveModule } from './directives/mark-asterisk.directive';
import { ResolveGuard } from './_guards/resolve.guard';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { LoaderService } from './shared/loader.service';
import { LoaderInterceptor } from './_interceptor/loader.interceptor';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    AllUsersComponent,
    AngularInterviewComponent,
    ProductsComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkAsteriskDirectiveModule

  ],
  providers: [
    AuthGuard,
    ResolveGuard,
    AuthService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
