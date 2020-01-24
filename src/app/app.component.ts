import { Component, Input } from '@angular/core';
import { interval } from '../assets/js/functions/freeWeek/freeWeekLoader';
import { HttpClient } from '@angular/common/http';
import * as freeWeekLoader from '../assets/js/functions/freeWeek/freeWeekLoader';
import * as summonerTier from '../assets/js/searchForm/getSummonerInfo'
import * as styleLoader from '../assets/js/style/style';

const config = require('../assets/json/eloAttributes.json')
declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  summonerRank: any = {};
  title = 'lol-stats';
  @Input() data='';
  

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    interval()
  }
}


