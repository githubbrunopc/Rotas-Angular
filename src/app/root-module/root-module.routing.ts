import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponentComponent } from '../root-component/root-component.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponentComponent,
    children: [
      { path: '', redirectTo: 'filho1', pathMatch: 'full' },
      { path: 'component_1', component: FirstComponentComponent },
      { path: 'component_2', component: SecondComponentComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {}
