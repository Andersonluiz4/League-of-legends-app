import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import * as freeWeekLoader from '../../assets/js/functions/freeWeek/freeWeekLoader';
import * as summonerTier from '../../assets/js/searchForm/getSummonerInfo'
import * as $ from 'jquery';

@Component({
  selector: 'app-functions',
  templateUrl: './freeweek.component.html',
  styleUrls: ['./freeweek.component.css']
})

export class FreeWeekComponent implements OnInit {
  summonerRank: any = {};
  marked = false;
  apiKey = 'RGAPI-31d34aea-ba4e-472f-8d57-d6001c678b04'
  SoloQueue = 'RANKED_SOLO_5x5'
  FlexQueue = 'RANKED_FLEX_SR'

  championsList: any = [];

  summonerName: string;
  
    constructor(private http:HttpClient) {
        
    }

  sendValues(input){
    this.marked= input.target.value;
    this.http
        .get<Object[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + this.apiKey)
        .subscribe(userId => 
          {
            this.http
        .get<Object>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + userId.id + '?api_key=' + this.apiKey)
        .subscribe(masteryInfo => {
          freeWeekLoader.loader("#loader", "#summonerInfo", 200, 1000)
            this.summonerRank = masteryInfo
            summonerTier.getSummonerTier(this.summonerRank, this.marked)
        })
  })
}

  loginForm() {
    document.getElementById("login-form").style.display = "block";
}

  ngOnInit() {
    freeWeekLoader.freeWeekInfo()
    freeWeekLoader.onload(freeWeekLoader.loader('#loaderDiv', '#container', 3500, 3600))
  }
}
