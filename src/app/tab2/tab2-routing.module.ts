import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCursoPage } from '../editar-curso/editar-curso.page';
import { RegistarCursoPage } from './../registar-curso/registar-curso.page';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'registar-curso',
    component: RegistarCursoPage
  },
  {
    path: 'editar-curso/:codigo',
    component: EditarCursoPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
