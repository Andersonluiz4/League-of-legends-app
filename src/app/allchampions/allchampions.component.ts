import { Component, OnInit } from '@angular/core';

import * as allchampions from '../../assets/js/allChampions/allchampions'
import {onload, loader} from '../../assets/js/style/style';

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
    onload(loader('#loaderDiv', '#container', 1200, 1300))
  }

}
