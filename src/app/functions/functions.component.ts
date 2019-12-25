import { Component, OnInit } from '@angular/core';
import * as abc from '../functions/api'
import * as CryptoJS from 'crypto-js';


import {HttpClient} from '@angular/common/http'
import { PathLocationStrategy } from '@angular/common';





@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})

export class FunctionsComponent implements OnInit {
  professionals: any = {};
  marked = false;
  theCheckbox = false;

  str: string;
  
    constructor(private http:HttpClient) {
        
    }

    toggleVisibility(e){
      this.marked= e.target.checked;
    }
  
  
  sendValues(){
    this.http
        .get<Object[]>('https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.str + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(user => 
          {
            this.http
        .get<any>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + user.id + '?api_key=RGAPI-cf6c2acf-6c9c-4255-a5fa-c2e305b47882')
        .subscribe(data => {
            this.professionals = data;
            if(this.professionals[1]) {
              document.getElementById('naruteiro').style.display = 'flex'
              document.getElementById('loader').style.display = 'flex'
              document.getElementById('erroor').style.display = 'none'
              document.getElementById('wins').textContent = 'wins: ' + this.professionals[0].wins
              document.getElementById('losses').textContent = 'losses: ' + this.professionals[0].losses
              document.getElementById('name').textContent = this.professionals[0].summonerName
              document.getElementById('tier').textContent = 'tier: ' + this.professionals[0].tier + " " + this.professionals[0].rank
              document.getElementById('eloImage').setAttribute("src", "https://i.pinimg.com/originals/d7/47/1e/d7471e2ef48175986e9b75b566f61408.png")
              var totalValue = this.professionals[0].wins + this.professionals[0].losses
              document.getElementById('rate').textContent = String((this.professionals[0].wins/totalValue)*100)
            }
            else {
              document.getElementById('naruteiro').style.display = 'none'
              document.getElementById('erroor').style.display = 'flex'
              document.getElementById('error').textContent = "Nothing to display"

            }
          
            })
          });
    
  }  


  ngOnInit() {
    
    abc.myMethod()
  }
}
