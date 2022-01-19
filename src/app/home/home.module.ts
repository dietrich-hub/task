import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddnewTodoComponent } from './addnew-todo/addnew-todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RememberItemComponent } from './remember-item/remember-item.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    SearchBarComponent,
    TodoItemComponent,
    AddnewTodoComponent,
    RememberItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
