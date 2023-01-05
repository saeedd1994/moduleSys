import {Component, Input, OnInit} from '@angular/core';
import {Accordion} from "../../models/accordion";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() accordion: Accordion[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
