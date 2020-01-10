import { Component, OnInit } from '@angular/core';
import * as allchampions from '../../assets/js/allChampions/allchampions'
import { HttpClient } from '@angular/common/http';
import * as freeWeekLoader from '../../assets/js/functions/freeWeek/freeWeekLoader';

@Component({
  selector: 'app-allchampions',
  templateUrl: './allchampions.component.html',
  styleUrls: ['./allchampions.component.css']
})
export class AllchampionsComponent implements OnInit {
  photos: Object[] = [];
  constructor() {
}

loader(outId, inId, fadeOutTime, fadeInTime) {
  setTimeout(function() {
    $(outId).fadeOut('fast');
  }, fadeOutTime);
  setTimeout(function(id) {
    $(inId).fadeIn('fast');
    
  }, fadeInTime);
}


  ngOnInit() {
    allchampions.loadAllChampions()
    freeWeekLoader.onload(this.loader('#loaderDiv', '#container', 1000, 1100))
  }

}
