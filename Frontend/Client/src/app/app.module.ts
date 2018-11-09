import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OfferingService } from './services/offering.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { ChatComponent } from './chat/chat.component';
import { MapComponent } from './map/map.component';
=======
import { UserPageComponent } from './user-page/user-page.component';
import { ProfilePicFormComponent } from './profile-pic-form/profile-pic-form.component';
import { CreateServiceComponent } from './create-service/create-service.component';
>>>>>>> 8380ed65a11046e84c684b7e8e9522c26add0bfc

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: UserPageComponent },
  { path: 'create', component: CreateServiceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CardComponent,
    RegisterComponent,
<<<<<<< HEAD
    ChatComponent,
    MapComponent,
=======
    UserPageComponent,
    ProfilePicFormComponent,
    CreateServiceComponent,
>>>>>>> 8380ed65a11046e84c684b7e8e9522c26add0bfc
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
