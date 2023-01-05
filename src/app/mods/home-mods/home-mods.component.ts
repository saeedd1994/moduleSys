import {Component, OnInit} from '@angular/core';
import {Accordion} from "../../models/accordion";

@Component({
  selector: 'app-home-mods',
  templateUrl: './home-mods.component.html',
  styleUrls: ['./home-mods.component.scss']
})
export class HomeModsComponent implements OnInit {

  constructor() {
  }

  accordion: Accordion[] = [
    {
      title: 'why the sky is blue?',
      content: 'because the color from the big-bang is it.'
    },
    {
      title: 'why some oranges are sweet ? ',
      content: 'it really depends on the water when it grown.'
    },
    {
      title: 'why baby crying all the day?',
      content: 'because always needs taking care and need milk.'
    }
  ]

  ngOnInit(): void {
  }

}
