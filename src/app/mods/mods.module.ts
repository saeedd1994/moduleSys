import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { HomeModsComponent } from './home-mods/home-mods.component';


@NgModule({
  declarations: [
    HomeModsComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
