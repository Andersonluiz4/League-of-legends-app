import { Component, OnInit } from '@angular/core';

import * as allchampions from '../../assets/js/allChampions/allchampions'
import * as freeWeekLoader from '../../assets/js/functions/freeWeek/freeWeekLoader';

@Component({
  selector: 'app-allchampions',
  templateUrl: './allchampions.component.html',
  styleUrls: ['./allchampions.component.css']
})
export class AllchampionsComponent implements OnInit {
  constructor() {
}

  ngOnInit() {
    allchampions.loadAllChampions()
    freeWeekLoader.onload(freeWeekLoader.loader('#loaderDiv', '#container', 1200, 1300))
  }

}
