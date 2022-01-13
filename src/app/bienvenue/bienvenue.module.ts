import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component';



@NgModule({
  declarations: [
    MainWelcomeComponent
  ],
  exports: [
    MainWelcomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BienvenueModule { }
