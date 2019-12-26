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

  championsList: any = [];

  str: string;
  
    constructor(private http:HttpClient) {
        
    }

    toggleVisibility(e){
      this.marked= e.target.checked;
    }
  
  getChampionsList() {
    this.http
        .get<Object[]>('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
        .subscribe(user => 
          {
          this.http
        .get<Object[]>('https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner' + user.id + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(user => {
          this.championsList = user
  })
          })
}

  getId() {

  }
  sendValues(){
    this.http
        .get<Object[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.str + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(user => 
          {
            this.http
        .get<Object>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + user.id + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(data => {
          this.loader("#loader", "#summonerInfo")
            this.professionals = data;
            var url;
            console.log( this.professionals)
            if (this.professionals[0].tier == 'WOOD') {
              url = "https://i.pinimg.com/originals/d7/58/1b/d7581b2a1033309523d20c9d1a1f4589.png";
            }
            else if (this.professionals[0].tier == 'BRONZE') {
              url = "https://i.pinimg.com/originals/4f/9e/6c/4f9e6c72c9744e912dbf6c19b13101f9.png";
            }
            else if (this.professionals[0].tier == 'SILVER') {
              url = "https://i.pinimg.com/originals/75/61/5a/75615a37309f44c6f07353277429a4f2.png";
            }
            else if (this.professionals[0].tier == 'GOLD') {
              url = "https://i.pinimg.com/originals/d7/58/1b/d7581b2a1033309523d20c9d1a1f4589.png";
            }
            else if (this.professionals[0].tier == 'PLATINUM') {
              url = "https://i.pinimg.com/originals/d7/47/1e/d7471e2ef48175986e9b75b566f61408.png";
            }
            else if (this.professionals[0].tier == 'DIAMOND') {
              url = "https://i.pinimg.com/originals/6a/10/c7/6a10c7e84c9f4e4aa9412582d28f3fd2.png";
            }
            else {
              url = ''
            }
            if(this.professionals[0]) {
              document.getElementById('naruteiro').style.display = 'flex'
              document.getElementById('summonerInfo').style.display = 'none'
              document.getElementById('loader').style.display = 'flex'
              document.getElementById('erroor').style.display = 'none'
              document.getElementById('wins').textContent = 'wins: ' + this.professionals[0].wins
              document.getElementById('losses').textContent = 'losses: ' + this.professionals[0].losses
              document.getElementById('name').textContent = this.professionals[0].summonerName
              document.getElementById('tier').textContent = 'tier: ' + this.professionals[0].tier + " " + this.professionals[0].rank
              document.getElementById('eloImage').setAttribute("src", url)
              var totalValue = this.professionals[0].wins + this.professionals[0].losses
              document.getElementById('rate').textContent = String((this.professionals[0].wins/totalValue)*100)
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
 


  ngOnInit() {
    
    abc.myMethod()
  }
}
