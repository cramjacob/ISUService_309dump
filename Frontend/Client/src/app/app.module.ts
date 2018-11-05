import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OfferingService } from './services/offering.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent }
];
>>>>>>> 4e5e6310475ddcc452c4fa328c204c72e0b2514f

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CardComponent,
<<<<<<< HEAD
    UserPageComponent
=======
    RegisterComponent,
>>>>>>> 4e5e6310475ddcc452c4fa328c204c72e0b2514f
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OfferingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
