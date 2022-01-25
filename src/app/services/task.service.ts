import {Remember, TodoModel} from "../model/task.model";
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
      description : "My HomeWork",
      editable : false,
      isDelete : false
    }
  ];

  remembersSubject = new Subject<Remember[]>();
  private remembers : any|Remember[]=[
    {
      id:1,
      description:"Do My HomeWork"
    },
    {
      id:2,
      description: "Go See My Father"
    }
  ]
  constructor() {
  }

  /**
   * Todo method manage
   */
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

  /**
   * Remember Method manage
   */

  onEmitRemembers(){
    this.remembersSubject.next(this.remembers);
  }
  addNewRemember(remember : Remember){
    this.remembers.push(remember);
    this.onEmitRemembers();
  }

  removeSingleRemember(index: number | undefined){
    this.remembers.splice(index,1);
    this.onEmitRemembers();
  }

}
