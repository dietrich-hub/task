import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as feather from "feather-icons";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit,AfterViewInit {

  constructor() {

  }

  ngOnInit(): void {
    // const view = document.querySelector(".te")
    //    // @ts-ignore
    // view.addEventListener("mouseover",(e)=>{
    //   console.log(e)
    // })
  }
  ngAfterViewInit(): void {
    feather.replace({"stroke-width":1});
  }

}
