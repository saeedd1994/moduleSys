import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';


@NgModule({
    declarations: [
        CollectionsHomeComponent,
        TableComponent
    ],
    exports: [
        CollectionsHomeComponent
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule
    ]
})
export class CollectionsModule { }
