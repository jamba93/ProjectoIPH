import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistarCursoPageRoutingModule } from './registar-curso-routing.module';

import { RegistarCursoPage } from './registar-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistarCursoPageRoutingModule
  ],
  declarations: [RegistarCursoPage]
})
export class RegistarCursoPageModule {}
