import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data: any = [
    {
      name: 'saeed',
      age: 28,
      job: 'frontend developer'
    },
    {
      name: 'ali',
      age: 38,
      job: 'backend developer'
    },
    {
      name: 'gholi',
      age: 19,
      job: 'designer'
    }
  ];

  headers: any = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
