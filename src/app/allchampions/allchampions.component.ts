import { Component, OnInit } from '@angular/core';
import * as allchampions from '../../assets/js/allChampions/allchampions'
import {onload, loader, routesIcons} from '../../assets/js/style/style';
import * as $ from 'jquery';


@Component({
  selector: 'app-allchampions',
  templateUrl: './allchampions.component.html',
  styleUrls: ['./allchampions.component.css']
})
export class AllchampionsComponent implements OnInit {
  
  
  summonerName: string;
  click: number = 0;
  removeFilter: number = 0;
  idList: any = [];

  public modelChange(str: string): void {
    if(this.click == 0) {
      $(".champions-images").each(function(){
        if ($(this).attr('id').search(new RegExp(str, "i")) < 0) {
            $(this).fadeOut(20);
        } else {
            $(this).show();
        }
    });
    }
    else {
          $(".filteredIds").each(function(){
          if ($(this).attr('id').search(new RegExp(str, "i")) < 0) {
            $(this).fadeOut(20);
        } else {
            $(this).show();
        }
      });  
    }
  
  }
  public filterByTitle(description) {
      $(".filteredIds").attr('class', 'champions-images');
      $(".champions-images").each(function(){
        if ($(this).attr('title').search(new RegExp(description , "i")) < 0) {
          $(this).fadeOut(20);
      }
      else {
        $(this).show();
        $(this).attr('class', 'filteredIds');
      }
    })
    this.click = 1;
  }

  public removeFilters() {
    $(".routeIcor").parent().find('.routeIcor').css('display', 'block');
    $(".champions-images").show();
    $(".filteredIds").attr('class', 'champions-images');
    this.click = 0;
  }

  constructor() {
}
  ngOnInit() {
    routesIcons()
    allchampions.loadAllChampions()
    onload(loader('#loaderDiv', '#container', 1200, 1300))
  }

}
