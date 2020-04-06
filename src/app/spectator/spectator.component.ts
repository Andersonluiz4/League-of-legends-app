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

  finalList = [];
  spectateInfo: any = {};
  userInfo: any = {};
  summonerId = false;
  championsList: any = [];
  summonerName: string;
  result: any = {};
  spec: any = {};

  constructor(private http:HttpClient) { }

  getSpectateInfo(input){
    const apiUrl = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    promise.then((data)=>{
      this.userInfo = data,
      
      this.http
        .get<any>('https://br1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + this.userInfo.id + '?api_key=' + config.apikey)
        .subscribe(async masteryInfo => {
          this.spectateInfo = masteryInfo
          this.http
          .get<any>("http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json")
          .subscribe(async summonersInfo => {
            this.spec = summonersInfo
            const keys = Object.values(this.spec.data)
            for(var id in this.spectateInfo.participants) {
                var championInfo = {'name': this.spectateInfo.participants[id].summonerName, 'champ': this.spectateInfo.participants[id].championId, 'teamId': this.spectateInfo.participants[id].teamId}
                var idsInfo = [championInfo.champ]
                for(var data = 0; data < keys.length; data++) {
                    if (idsInfo.includes(parseInt(keys[data].key))) {
                        var freeWeekLoadImage = '/assets/championImages/loading/' + keys[data].name + '_0.jpg'
                        console.log(championInfo)
                        if(championInfo.teamId == 100) {
                          document.getElementById('list1').innerHTML += '<div><img id="champImg" src="' + "../.." + freeWeekLoadImage + '" + height=300px;' +'> <div id="summonerId">' + championInfo.name + '</div></div>'
                          $("#list1").css("color", "darksalmon")
                          $("#list1").css("textAlign", "center")
                        }
                        else {
                          document.getElementById('list2').innerHTML += '<div><img id="champImg" src="' + "../.." + freeWeekLoadImage + '" + height=300px;' + '> <div id="summonerId">' + championInfo.name + '</div></div>'
                          $("#list2").css("color", "darksalmon")
                          $("#list2").css("textAlign", "center")
                          
                        }
                      $("#summonerId").css("borderStyle", "groove")
                      $("#champImg").css("borderStyle", "groove")
                    }
                }
            }
            // styleLoader.loader("#loader", "#summonerInfo", 200, 1000),
          })
      })
    }).catch(()=>{
      styleLoader.loader("#loader2", "#error-message", 500, 1000)
      styleLoader.errorMessage("Invalid summoner name")
      
    });
  }

  ngOnInit() {
  }

}
