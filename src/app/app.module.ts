import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './pages/add/add.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AngularFireLite } from 'angularfire-lite';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './ui/error/error.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent,
    AddComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NguiAutoCompleteModule,
    AngularFireLite.forRoot(environment.config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
