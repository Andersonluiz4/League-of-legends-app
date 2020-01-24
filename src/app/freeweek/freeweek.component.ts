import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import * as freeWeekLoader from '../../assets/js/functions/freeWeek/freeWeekLoader';
import * as summonerTier from '../../assets/js/searchForm/getSummonerInfo'
import * as styleLoader from '../../assets/js/style/style';


const config = require('../../assets/json/eloAttributes.json')
declare var require: any

@Component({
  selector: 'app-functions',
  templateUrl: './freeweek.component.html',
  styleUrls: ['./freeweek.component.css']
})

export class FreeWeekComponent implements OnInit {
  summonerRank: any = {};
  userInfo: any = {};
  summonerId = false;
  championsList: any = [];
  summonerName: string;
  
  constructor(private http:HttpClient) {
  }


  checkApiKey() {
    const apiUrl = 'https://br1.api.riotgames.com/lol/status/v3/shard-data?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    promise.then((data)=>{
      freeWeekLoader.freeWeekInfo()
      styleLoader.onload(styleLoader.loader('#loaderDiv', '#container', 2700, 2700))
    }).catch((error)=>{
      document.getElementById('bodyId').style.display = 'None'
      document.getElementById('apiError').style.display = 'grid'
      document.getElementById('apiErrorMessage').textContent = "Response : " +  error.status + " - " + error.statusText + ", Please check you api key."
      
    });
    }

  sendValues(input){
    this.summonerId= input.target.value;
    const apiUrl = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    promise.then((data)=>{
      this.userInfo = data,
      this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + this.userInfo.id + '?api_key=' + config.apikey)
        .subscribe(masteryInfo => {
          this.summonerRank = masteryInfo,
          styleLoader.loader("#loader", "#summonerInfo", 200, 1000),
          summonerTier.getSummonerTier(this.summonerRank, this.summonerId)
        })
    }).catch((error)=>{
      styleLoader.loader("#loader2", "#error-message", 500, 1000)
      styleLoader.errorMessage("Invalid summoner name")
      
    });
  }
          
  ngOnInit() {
    this.checkApiKey()
  }
}
