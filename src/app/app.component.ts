import { Component, Input } from '@angular/core';
import { interval } from '../assets/js/functions/freeWeek/freeWeekLoader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'lol-stats';
  @Input() data='';
    

  constructor() {

  }
  ngOnInit() {
    interval()
  }
}


