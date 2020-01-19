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

  sendValues(input){
    this.summonerId= input.target.value;
    this.http
        .get<any[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + config.apikey)
        .subscribe(userId => {
          this.userInfo = userId
            this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + this.userInfo.id + '?api_key=' + config.apikey)
        .subscribe(masteryInfo => {
          styleLoader.loader("#loader", "#summonerInfo", 200, 1000)
            this.summonerRank = masteryInfo
            summonerTier.getSummonerTier(this.summonerRank, this.summonerId)
        })
      })
}
  ngOnInit() {
    freeWeekLoader.freeWeekInfo()
    styleLoader.onload(styleLoader.loader('#loaderDiv', '#container', 3000, 3100))
    
  }
}
