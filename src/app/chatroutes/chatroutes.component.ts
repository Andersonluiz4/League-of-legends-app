import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatroutes',
  templateUrl: './chatroutes.component.html',
  styleUrls: ['./chatroutes.component.css']
})
export class ChatroutesComponent implements OnInit {
  userInfo: any = {};
  summonerName: string;
  data: any = [];

  serverData: JSON;
  employeeData: JSON;

  constructor(private httpClient: HttpClient) {
  }
  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/suggestions', {
      params: {
        appid: this.summonerName
      }
      }).subscribe(data => {
      this.data.push(data)

    })
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
