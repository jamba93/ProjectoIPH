import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registar-curso',
    loadChildren: () => import('./registar-curso/registar-curso.module').then(m => m.RegistarCursoPageModule)
  },
  {
    path: 'editar-curso/:codigo',
    loadChildren: () => import('./editar-curso/editar-curso.module').then(m=> m.EditarCursoPageModule)
  },

  /*
      {
    path: 'editar-curso',
    loadChildren: () => import('./editar-curso/editar-curso.module').then( m => m.EditarCursoPageModule)
  },

  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
