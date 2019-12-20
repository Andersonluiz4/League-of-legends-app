import { Component, OnInit } from '@angular/core';
import * as abc from '../functions/api'
import {HttpClient} from '@angular/common/http'
import { PathLocationStrategy } from '@angular/common';





@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})

  
export class FunctionsComponent implements OnInit {

    constructor() {
      

  } 
  ngOnInit() {
    
    abc.myMethod()
  }
}
