import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrafenoComponent } from './grafeno.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:  GrafenoComponent,
    children: [     
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrafenoRoutingModule { }
