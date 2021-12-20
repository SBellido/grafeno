import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorFourZeroFourComponent } from './errors/error-four-zero-four/error-four-zero-four.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'grafeno',
        loadChildren: () => import('./grafeno/grafeno.module')
          .then(m => m.GrafenoModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home' 
      },
      {
        path: '**',
        component: ErrorFourZeroFourComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }