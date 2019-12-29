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
  summonerRank: any = {};
  marked = false;
  theCheckbox = false;
  soloChecked: Boolean;
  flexChecked: Boolean;

  championsList: any = [];

  summonerName: string;
  
    constructor(private http:HttpClient) {
        
    }

  sendValues(e){
    this.marked= e.target.value;
    this.http
        .get<any[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=RGAPI-290c0b72-77e1-425d-a75f-13cd19095846')
        .subscribe(userId  => 
          {
            this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + userId.id + '?api_key=RGAPI-290c0b72-77e1-425d-a75f-13cd19095846')
        .subscribe(masteryInfo => {
          this.loader("#loader", "#summonerInfo")
            this.summonerRank = masteryInfo;
            var a = 0;
            var fila;
            if(this.summonerRank[0] && !this.marked) {
              a = 0;
              if(!fila) {
                document.getElementById("RANKED_SOLO_5x5").style.display = 'flex'
                document.getElementById("RANKED_FLEX_SR").style.display = 'flex'
              }
            }
            if (this.summonerRank[0] && !this.summonerRank[1]) {
              a = 0;
                $("#queuePicker").prop("selectedIndex", 0)
                if (this.summonerRank[0].queueType == this.marked) {
                  document.getElementById("RANKED_SOLO_5x5").style.display = 'none'
                  fila = "RANKED_SOLO_5x5"

                }
                else {
                  document.getElementById("RANKED_FLEX_SR").style.display = 'none'
                  fila = "RANKED_FLEX_SR"
              }
            }
            
            if(this.summonerRank[1] && this.summonerRank[1].queueType == this.marked) {
              a = 1;
            }
            if(this.summonerRank[0]) {
              document.getElementById('info-content').style.display = 'flex'
              document.getElementById('queuePicker').style.display = 'flex'
              document.getElementById('summonerInfo').style.display = 'none'
              document.getElementById('loader').style.display = 'flex'
              document.getElementById('error-content').style.display = 'none'
              document.getElementById('wins').textContent = 'Wins: ' + this.summonerRank[a].wins
              document.getElementById('losses').textContent = 'Losses: ' + this.summonerRank[a].losses
              document.getElementById('name').textContent = this.summonerRank[a].summonerName
              document.getElementById('tier').textContent = 'Tier: ' + this.summonerRank[a].tier + " " + this.summonerRank[0].rank
              document.getElementById('eloImage').setAttribute("src", this.getEloImage(this.summonerRank[a].tier))
              var totalValue = this.summonerRank[a].wins + this.summonerRank[a].losses
              document.getElementById('rate').textContent = 'Win Rate: ' + String(Math.round((this.summonerRank[a].wins/totalValue) * 100) + '%')

            }
            
            else {
              document.getElementById('error-content').style.display = 'flex'
              document.getElementById('error-message').style.display = 'none'
              document.getElementById('loader2').style.display = 'flex'
              this.loader("#loader2", "#error-message")
              document.getElementById('info-content').style.display = 'none'
              
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
