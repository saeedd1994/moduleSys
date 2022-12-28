import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElementsRoutingModule} from './elements-routing.module';
import {ElementsHomeComponent} from './elements-home/elements-home.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {TimesDirective} from './Directives/times.directive';
import {SharedModule} from "../shared/shared.module";
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule {
}
