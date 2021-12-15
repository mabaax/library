import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import { BookComponent } from './components/books/book/book.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { PartnerComponent } from './components/partners/partner/partner.component';
import { PartnerDetailsComponent } from './components/partners/partner-details/partner-details.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    PartnerComponent,
    PartnerDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
