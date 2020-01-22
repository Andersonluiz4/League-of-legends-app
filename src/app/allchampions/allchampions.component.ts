import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as allchampions from '../../assets/js/allChampions/allchampions'
import {onload, loader} from '../../assets/js/style/style';
import * as $ from 'jquery';


@Component({
  selector: 'app-allchampions',
  templateUrl: './allchampions.component.html',
  styleUrls: ['./allchampions.component.css']
})

export class AllchampionsComponent implements OnInit {
  
  
  summonerName: string;
  click: number = 0;
  public modelChange(str: string): void {
        $(".img-thumbnail").each(function(){
          if ($(this).attr('id').search(new RegExp(str, "i")) < 0) {
              $(this).fadeOut(20);
          } else {
              $(this).show();
          }
      });
  }
  public filterByTitle(description) {
      $(".img-thumbnail").each(function(){
        if ($(this).attr('title').search(new RegExp(description , "i")) < 0) {
          $(this).fadeOut(20); 
        }
    else {
      $(this).show();
    }
  })
    }
  constructor() {
    
}
  ngOnInit() {
    allchampions.loadAllChampions()
    onload(loader('#loaderDiv', '#container', 1200, 1300))
  }

}
