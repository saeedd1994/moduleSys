import {Component, Input, OnInit} from '@angular/core';
import {Accordion} from "../../models/accordion";
import {first} from "rxjs";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() accordion: Accordion[] = [];
  firstIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if(index === this.firstIndex)
    {
      this.firstIndex = -1
    }else
    {
      this.firstIndex = index
    }

  }
}
