import { Component, OnInit } from '@angular/core';
import * as freeWeekLoader from '../../assets/js/functions/freeWeek/freeWeekLoader';
import * as masteryImage from '../../assets/js/functions/mastery/userMastery'
import * as allChampions from '../../assets/js/allChampions/allChampions'


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
  apiKey = 'RGAPI-31d34aea-ba4e-472f-8d57-d6001c678b04'
  SoloQueue = 'RANKED_SOLO_5x5'
  FlexQueue = 'RANKED_FLEX_SR'


  championsList: any = [];

  summonerName: string;
  
    constructor(private http:HttpClient) {
        
    }

  sendValues(e){
    this.marked= e.target.value;
    this.http
        .get<any[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.summonerName + '?api_key=' + this.apiKey)
        .subscribe(userId  => 
          {
            this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + userId.id + '?api_key=' + this.apiKey)
        .subscribe(masteryInfo => {
          this.loader("#loader", "#summonerInfo", 200, 1000)
            this.summonerRank = masteryInfo;
            var a = 0;
            var fila;
            if(this.summonerRank[0] && !this.marked) {
              a = 0;
              if(!fila) {
                document.getElementById(this.SoloQueue).style.display = 'flex'
                document.getElementById(this.FlexQueue).style.display = 'flex'
              }
            }
            if (this.summonerRank[0] && !this.summonerRank[1]) {
              a = 0;
                $("#queuePicker").prop("selectedIndex", 0)
                if (this.summonerRank[0].queueType == this.marked) {
                  document.getElementById(this.SoloQueue).style.display = 'none'
                  fila = this.SoloQueue

                }
                else {
                  document.getElementById(this.FlexQueue).style.display = 'none'
                  fila = this.FlexQueue
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
              document.getElementById('eloImage').setAttribute("src", masteryImage.getEloImage(this.summonerRank[a].tier))
              var totalValue = this.summonerRank[a].wins + this.summonerRank[a].losses
              document.getElementById('rate').textContent = 'Win Rate: ' + String(Math.round((this.summonerRank[a].wins/totalValue) * 100) + '%')

            }
            else {
              document.getElementById('error-content').style.display = 'flex'
              document.getElementById('error-message').style.display = 'none'
              document.getElementById('loader2').style.display = 'flex'
              this.loader("#loader2", "#error-message", 500, 1000)
              document.getElementById('info-content').style.display = 'none'
              
              document.getElementById('error').textContent = "Nothing to display"

            }
          
            })
          });
    
  }

  loader(outId, inId, fadeOutTime, fadeInTime) {
    setTimeout(function() {
      $(outId).fadeOut('fast');
    }, fadeOutTime);
    setTimeout(function(id) {
      $(inId).fadeIn('fast');
      
    }, fadeInTime);
  }

  loginForm() {
    document.getElementById("login-form").style.display = "block";
}


  ngOnInit() {
    freeWeekLoader.onload(this.loader('#loaderDiv', '#container', 3000, 3100))
    freeWeekLoader.freeWeekInfo()
  }
}
