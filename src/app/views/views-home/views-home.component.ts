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

  items:any= [
    {
      title: 'couch',
      imageUrl: 'assets/images/couch.jpg',
      description: 'this is a really comfortable couch for lying'
    },
    {
      title: 'dresser',
      imageUrl: 'assets/images/dresser.jpeg',
      description: 'the best dresser in the world and more capacity'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
