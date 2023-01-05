import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { HomeModsComponent } from './home-mods/home-mods.component';
import { ModalComponent } from './modal/modal.component';
import {SharedModule} from "../shared/shared.module";
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    HomeModsComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
