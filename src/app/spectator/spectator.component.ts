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
  champion100: any = [];
  champion200: any = [];

  constructor(private http:HttpClient) { }

  public removeFilters() {
    $("#error").css("display", "none")
    this.champion100 = [];
    this.champion200 = [];
    $('#searchForm').show();
    $('#Revert').css("display", "none");
  }

  async getSpectateInfo(){
    $('#searchForm').hide();
    $('#Revert').css("display", "block");
    $('#loaderSpec').css("display", "block");
    
    const apiUrl = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + config.apikey
    const promise = this.http.get(apiUrl).toPromise();
    console.log(promise)
    promise.then((data)=>{
      this.userInfo = data
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
                        var freeWeekLoadImage = '/assets/championImages/loading/' + keys[data].id + '_0.jpg'
                        championInfo['image'] = freeWeekLoadImage
                        if(championInfo.teamId == 100) {
                          this.champion100.push(championInfo)
 
                        }
                        else {
                          this.champion200.push(championInfo)
                        }   
                  $("#wrapper").css("background-image", "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(" + "https://1.bp.blogspot.com/-TM4KItRZyWA/WIpf-w6ccnI/AAAAAAABBak/zMT7AOcnOSs4tOO1CJ6XospxUc1vZXnLACLcB/s1600/SRBloodMoonBackground.png" + ")");
                }
            }
          }
          })
      })
            // document.getElementById('list2').innerHTML += '<div class="test"><img id="champImg" src="' + "../.." + freeWeekLoadImage + '" + height=300px;' + '> <div id="summonerId">' + championInfo.name + '</div></div>'

    }).catch((error)=>{
      $("#loaderSpec").css("display", "none")
      $("#error").css("display", "block")
      document.getElementById("error").textContent = error.statusText
      console.log(error.statusText)

    });
    
  }
  
  

  ngOnInit() {
  }

}
