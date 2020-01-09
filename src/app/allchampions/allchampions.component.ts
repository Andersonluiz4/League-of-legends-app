import { Component, OnInit } from '@angular/core';
import * as allchampions from '../../assets/js/allChampions/allchampions'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allchampions',
  templateUrl: './allchampions.component.html',
  styleUrls: ['./allchampions.component.css']
})
export class AllchampionsComponent implements OnInit {
  photos: Object[] = [];
  constructor() {
}


  ngOnInit() {
    
  }

}
