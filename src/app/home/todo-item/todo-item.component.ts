import {Component, Directive, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {TodoModel} from "../../model/task.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() taskDes : String |undefined;
  @Input() id : number |undefined;
  @Input() editable : boolean | undefined;
  @Input() Index : number | undefined;

  @ViewChild('textarea') textarea: ElementRef | undefined;
  @ViewChild("card") card : ElementRef | undefined;

  isEdit = false;
  foucusElemetn=false;
  voir=false;
  draggable=true;
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }
  onDoingEditable(){
    this.isEdit = true;
    this.foucusElemetn = true;
    this.textarea?.nativeElement.focus();
    console.log(this.editable);

  }
  onsave(){
    this.isEdit = false;
    //console.log(this.textarea?.nativeElement)
  }
  removeThis(){
    this.voir = true;
    setTimeout(()=>{
      this.taskService.remove(this.Index);
    },200);

    //this.taskService.emitTodosSubject();
  }


}
