import {Component, Input, OnInit} from '@angular/core';
import {Stat} from "../../models/stat";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() data: Stat[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
