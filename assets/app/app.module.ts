import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


import { AppComponent } from "./app.component";

import { PlaceComponent } from "./places/place.component";
import { PlacesListComponent } from './places/places-list/places-list.component';
import { newPlaceFormComponent } from "./places/place-form/new-place.component";
import { PlacesRouterComponent } from './places/places_router.component';

import { HeaderComponent } from './header.component';

import { AuthProfileComponent } from './auth/profile.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { SignUpComponent } from './auth/signup.component';

import { Routing } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        PlaceComponent,
        PlacesListComponent,
        newPlaceFormComponent,
        PlacesRouterComponent,
        AuthProfileComponent,
        LoginComponent,
        LogoutComponent,
        SignUpComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule, 
        Routing,
        HttpModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}