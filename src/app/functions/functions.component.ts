import { Component, OnInit } from '@angular/core';
import * as abc from '../functions/api'


import {HttpClient} from '@angular/common/http'
import * as $ from 'jquery';




@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})

export class FunctionsComponent implements OnInit {
  professionals: any = {};
  marked = false;
  theCheckbox = false;
  soloChecked: Boolean;
  flexChecked: Boolean;

  championsList: any = [];

  str: string;
  
    constructor(private http:HttpClient) {
        
    }
  getChampionsList() {
    this.http
        .get<Object[]>('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
        .subscribe(user => 
          {
          this.http
        .get<any[]>('https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner' + user.id + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(user => {
          this.championsList = user
  })
          })
}


  sendValues(e){
    this.marked= e.target.value;
    this.http
        .get<any[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.str + '?api_key=RGAPI-e56670f7-f26a-49f6-8037-ab882cb636bc')
        .subscribe(user  => 
          {
            this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + user.id + '?api_key=RGAPI-e56670f7-f26a-49f6-8037-ab882cb636bc')
        .subscribe(data => {
          this.loader("#loader", "#summonerInfo")
            this.professionals = data;
            
            var a = 0;
            if(this.professionals[0] && this.professionals[0].queueType == this.marked) {
              a = 0;
              console.log("dsa")
            }
            if(this.professionals[1] && this.professionals[1].queueType == this.marked) {
              a = 1;
              console.log("duhs")
            }
            if(this.professionals[0]) {
              document.getElementById('naruteiro').style.display = 'flex'
              document.getElementById('queuePicker').style.display = 'flex'
              document.getElementById('summonerInfo').style.display = 'none'
              document.getElementById('loader').style.display = 'flex'
              document.getElementById('erroor').style.display = 'none'
              document.getElementById('wins').textContent = 'Wins: ' + this.professionals[a].wins
              document.getElementById('losses').textContent = 'Losses: ' + this.professionals[a].losses
              document.getElementById('name').textContent = this.professionals[a].summonerName
              document.getElementById('tier').textContent = 'Tier: ' + this.professionals[a].tier + " " + this.professionals[0].rank
              document.getElementById('eloImage').setAttribute("src", this.getEloImage(this.professionals[a].tier))
              var totalValue = this.professionals[0].wins + this.professionals[a].losses
              document.getElementById('rate').textContent = 'Win Rate: ' + String(Math.round((this.professionals[a].wins/totalValue) * 100) + '%')

            }
            
            else {
              document.getElementById('erroor').style.display = 'flex'
              document.getElementById('sakura').style.display = 'none'
              document.getElementById('loader2').style.display = 'flex'
              this.loader("#loader2", "#sakura")
              document.getElementById('naruteiro').style.display = 'none'
              
              document.getElementById('error').textContent = "Nothing to display"

            }
          
            })
          });
    
  }

  loader(outId, inId) {
    setTimeout(function() {
      $(outId).fadeOut('fast');
    }, 500);
    setTimeout(function(id) {
      $(inId).fadeIn('fast');
    }, 1000);
  }

  getEloImage(tier) {
    var url;
    if (tier == 'WOOD') {
      return  "https://i.pinimg.com/originals/d7/58/1b/d7581b2a1033309523d20c9d1a1f4589.png";
    }
    else if (tier == 'BRONZE') {
      return "https://i.pinimg.com/originals/4f/9e/6c/4f9e6c72c9744e912dbf6c19b13101f9.png";
    }
    else if (tier == 'SILVER') {
      return "https://i.pinimg.com/originals/75/61/5a/75615a37309f44c6f07353277429a4f2.png";
    }
    else if (tier == 'GOLD') {
      return "https://i.pinimg.com/originals/d7/58/1b/d7581b2a1033309523d20c9d1a1f4589.png";
    }
    else if (tier == 'PLATINUM') {
      return "https://i.pinimg.com/originals/d7/47/1e/d7471e2ef48175986e9b75b566f61408.png";
    }
    else if (tier == 'DIAMOND') {
      return "https://i.pinimg.com/originals/6a/10/c7/6a10c7e84c9f4e4aa9412582d28f3fd2.png";
    }
    else {
      return ''
    }
  }
 


  ngOnInit() {
    
    abc.myMethod()
  }
}
