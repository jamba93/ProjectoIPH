import { Component, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';
import { Curso } from './../curso/curso';

@Component({
  selector: 'app-registar-curso',
  templateUrl: './registar-curso.page.html',
  styleUrls: ['./registar-curso.page.scss'],
})
export class RegistarCursoPage implements OnInit {

  curso = new Curso();
  showAlert = false;
  constructor( private cursoService: CursoService ){}

  ngOnInit(){
  }

  salvarCursos(){

    this.cursoService.salvarCursos( this.curso ).subscribe((response)=>{

      console.log(response);
      this.curso = new Curso();
      this.showAlert = true;

    });

  }

  fecharAlerta(){
    this.showAlert = false;
  }

}
