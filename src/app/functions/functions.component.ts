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

  str: string;
  
    constructor(private http:HttpClient) {
        
    }
  
  sendValues(){
    this.http
        .get<Object[]>('https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + this.str + '?api_key=RGAPI-7a79fe4f-1986-4af5-ab53-032bb80fa5e3')
        .subscribe(data => 
          {
            this.professionals = data;
            console.log(this.professionals[0])
            document.getElementById('wins').textContent = 'wins: ' + this.professionals[0].wins
            document.getElementById('losses').textContent = 'losses: ' + this.professionals[0].losses
            document.getElementById('name').textContent = this.professionals[0].summonerName
            document.getElementById('tier').textContent = 'tier: ' + this.professionals[0].tier + " " + this.professionals[0].rank
            document.getElementById('eloImage').src = "https://i.pinimg.com/originals/d7/47/1e/d7471e2ef48175986e9b75b566f61408.png"
            var totalValue = this.professionals[0].wins + this.professionals[0].losses
            document.getElementById('rate').textContent = String((this.professionals[0].wins/totalValue)*100)
          });
    
  }  


  ngOnInit() {
    
    abc.myMethod()
  }
}
