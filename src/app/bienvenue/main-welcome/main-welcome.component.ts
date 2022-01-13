import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-main-welcome',
  templateUrl: './main-welcome.component.html',
  styleUrls: ['./main-welcome.component.css']
})
export class MainWelcomeComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    feather.replace({'stroke-width': 1});
  }

}
