import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "tk-app",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit{
  constructor(private _routEx:RouterExtensions, private _router: Router){

  }

  ngOnInit(){
  }
}
