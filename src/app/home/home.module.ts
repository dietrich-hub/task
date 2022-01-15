import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddnewTodoComponent } from './addnew-todo/addnew-todo.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    SearchBarComponent,
    TodoItemComponent,
    AddnewTodoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
