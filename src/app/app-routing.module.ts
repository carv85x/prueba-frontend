import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivosComponent } from './activos/activos.component';

const routes: Routes = [
  { path: 'activos', component: ActivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
