import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-welcome',
  templateUrl: './main-welcome.component.html',
  styleUrls: ['./main-welcome.component.css']
})
export class MainWelcomeComponent implements OnInit,AfterViewInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    feather.replace({'stroke-width': 1});
  }
  gohome(){
    console.log("test");
    this.route.navigate(["/home"]);
  }

}
