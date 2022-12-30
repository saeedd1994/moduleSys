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
      job: 'frontend developer',
      employee: true
    },
    {
      name: 'ali',
      age: 38,
      job: 'backend developer',
      employee: false
    },
    {
      name: 'gholi',
      age: 19,
      job: 'designer',
      employee: true
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
    },
    {
      key: 'employee',
      label: 'Has a Job ?'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
