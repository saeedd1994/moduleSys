import {Component, Input, OnInit} from '@angular/core';
import {ItemListModel} from "../../models/item-list-model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items: ItemListModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
