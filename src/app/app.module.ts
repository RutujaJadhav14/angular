import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomecomponentComponent } from "./homecomponent/homecomponent.component";
import {StockcomponentComponent } from "./stockcomponent/stockcomponent.component";
import { DetailcomponentComponent } from "./detailcomponent/detailcomponent.component";


@NgModule({
    declarations: [
        AppComponent,
        HomecomponentComponent ,
        StockcomponentComponent,DetailcomponentComponent

        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FontAwesomeModule,
       
    ]
})
export class AppModule { }
