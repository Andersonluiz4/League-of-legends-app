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
            console.log(this.professionals[0].wins)
            document.getElementById('wins').textContent = 'wins: ' + this.professionals[0].wins
            document.getElementById('losses').textContent = 'losses: ' + this.professionals[0].losses
          });
    
  }  


  ngOnInit() {
    
    abc.myMethod()
  }
}
