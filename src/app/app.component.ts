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

  checkApiKey() {
    console.log("das")
    const apiUrl = 'https://br1.api.riotgames.com/lol/status/v3/shard-data?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    promise.then((data)=>{
      freeWeekLoader.freeWeekInfo()
      styleLoader.onload(styleLoader.loader('#loaderDiv', '#container', 2700, 2700))
    }).catch((error)=>{
      if(error.status == 0) {
        document.getElementById('apiErrorMessage').textContent = "Please disable the CORS policy."
      }
      else {
        document.getElementById('apiErrorMessage').textContent = "Response : " +  error.status + " - " + error.statusText + ", Please check you api key."
      }
      document.getElementById('bodyId').style.display = 'None'
      document.getElementById('apiError').style.display = 'grid'
      
    });
    }

  ngOnInit() {
    interval()
  }
}


