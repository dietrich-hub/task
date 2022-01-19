import {TodoModel} from "../model/task.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class TaskService {

  // @ts-ignore
  todosSubject= new Subject<TodoModel[]>();
  private todos : any|TodoModel[]=[
    {
      id : 1,
      description : "Go To School",
      editable : false,
      isDelete : false
    },
    {
      id : 2,
      description : "Do My HomeWork",
      editable : false,
      isDelete : false
    }
  ];
  constructor() {
  }

  // @ts-ignore
  getTodo() : TodoModel[]{
    return this.todos;
  }
  getTodoEdit(){
    this.todosSubject.next(this.todos.slice())
  }
  addTodo(todoNew : TodoModel){
       this.todos.push(todoNew);
       this.emitTodosSubject();
  }
  emitTodosSubject(){
    this.todosSubject.next(this.todos.slice())
  }

  remove(index: number | undefined){
    // @ts-ignore
    if (index !== undefined){
      this.todos.splice(index,1);
      this.emitTodosSubject();
    }

  }

}
