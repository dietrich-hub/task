import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  acitveTodoForm : boolean=false;
  activeRememberForm : boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onActiveTodoFormt() : void{
    this.acitveTodoForm = !this.acitveTodoForm;
}
onActiveRememberForm() : void{
    this.activeRememberForm = !this.activeRememberForm;
}

}
