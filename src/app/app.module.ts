import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenueModule } from './bienvenue/bienvenue.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes} from "@angular/router";
import {MainHomeComponent} from "./home/main-home/main-home.component";
import {MainWelcomeComponent} from "./bienvenue/main-welcome/main-welcome.component";

const routeMod : Routes=[
  {path :"home", component : MainHomeComponent},
  {path:"", component:MainWelcomeComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BienvenueModule,
    HomeModule,
    RouterModule.forRoot(routeMod)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
