import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrafenoRoutingModule } from './grafeno-routing.module';
import { GrafenoComponent } from './grafeno.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    GrafenoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GrafenoRoutingModule
  ]
})
export class GrafenoModule { }
