import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-remember-item',
  templateUrl: './remember-item.component.html',
  styleUrls: ['./remember-item.component.css']
})
export class RememberItemComponent implements OnInit {

  @Input() taskDes : String |undefined;
  @Input() id : number |undefined;
  @Input() editable : boolean | undefined;
  @Input() Index : number | undefined;

  isEdit=false;
  activeVisibility : boolean=false;
  isRemove : boolean=false;
  isDesactive:boolean=false;

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

  onDoingEditable(){
    this.isEdit = true;
    console.log(this.editable);

  }
  onsave(){
    this.isEdit = false;
    //console.log(this.textarea?.nativeElement)
  }
  removeThisRemember(){
    this.isRemove = true;
    this.isDesactive = true;
    setTimeout(()=>{
      // @ts-ignore
      this.taskService.removeSingleRemember(+this.Index);
    },200);

    //this.taskService.emitTodosSubject();
  }

  activeV(){
    console.log("this parent")
    if (!this.isDesactive)
    this.activeVisibility = true;
  }
  desactiveV(){
    this.activeVisibility = false;
  }
  // removeDesactiveMore(){
  //   console.log("this button")
  //   this.isDesactive=true;
  // }
  // removeRactiveMore(){
  //   this.isDesactive = false;
  // }

}
