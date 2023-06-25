import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistarCursoPage } from './registar-curso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistarCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistarCursoPageRoutingModule {}
