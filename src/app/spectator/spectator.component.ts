import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fw from '../../assets/js/functions/freeWeek/freeWeekLoader'
import * as styleLoader from '../../assets/js/style/style';
import * as spec from '../../assets/js/functions/spectate/spectateData'

const config = require('../../assets/json/eloAttributes.json')
declare var require: any

@Component({
  selector: 'app-spectator',
  templateUrl: './spectator.component.html',
  styleUrls: ['./spectator.component.css']
})
export class SpectatorComponent implements OnInit {

  spectateInfo: any = {};
  userInfo: any = {};
  summonerId = false;
  championsList: any = [];
  summonerName: string;

  constructor(private http:HttpClient) { }

  getSpectateInfo(input){
    console.log(this.summonerName)
    const apiUrl = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    promise.then((data)=>{
      this.userInfo = data,
      
      this.http
        .get<any>('https://br1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + this.userInfo.id + '?api_key=' + config.apikey)
        .subscribe(masteryInfo => {
          this.spectateInfo = masteryInfo
          console.log(spec.getSpectateImages(this.spectateInfo.participants))
          // styleLoader.loader("#loader", "#summonerInfo", 200, 1000),
        })
    }).catch(()=>{
      styleLoader.loader("#loader2", "#error-message", 500, 1000)
      styleLoader.errorMessage("Invalid summoner name")
      
    });
  }

  ngOnInit() {
  }

}
