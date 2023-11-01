import { NgModule } from '@angular/core';
import { RootComponentComponent } from '../root-component/root-component.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { RootRoutingModule } from '../root-module/root-module.routing';


@NgModule({
  declarations: [
    FirstComponentComponent,
    SecondComponentComponent,
    RootComponentComponent,
  ],
  imports: [
    RootRoutingModule,
  ]
})
export class RootModuleModule { }