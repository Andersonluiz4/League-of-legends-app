import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as freeWeekLoader from '../assets/js/functions/freeWeek/freeWeekLoader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loader(outId, inId, fadeOutTime, fadeInTime) {
    setTimeout(function() {
      $(outId).fadeOut('fast');
    }, fadeOutTime);
    setTimeout(function(id) {
      $(inId).fadeIn('fast');
      
    }, fadeInTime);
  }
  title = 'lol-app';
  @Input() data='';
    
  photos: Object[] = [];

  constructor() {

  }
  ngOnInit() {
    freeWeekLoader.onload(this.loader('#loaderDiv', '#container', 3000, 3100))
  }
}


