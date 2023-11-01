import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootModuleModule } from './root-module/root-module.module';

const routes: Routes = [
  { path: 'root', loadChildren: () => RootModuleModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }