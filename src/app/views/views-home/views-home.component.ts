import {Component, OnInit} from '@angular/core';
import {Stat} from "../../models/stat";

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats: Stat[] = [
    {
      value: 1200,
      label: 'number of users'
    },
    {
      value: 318,
      label: 'downloads'
    },
    {
      value: 900,
      label: 'satisfaction'
    },
    {
      value: 27,
      label: 'stars'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
