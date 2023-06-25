import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso/curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.page.html',
  styleUrls: ['./editar-curso.page.scss'],
})
export class EditarCursoPage implements OnInit {

  constructor( private route:ActivatedRoute, private cursoService: CursoService ){}

  codigo:number;
  curso = new Curso();
  showAlert = false;

  ngOnInit() {
      this.codigo =  this.route.snapshot.params['codigo'];

      this.cursoService.buscarCurso( this.codigo ).subscribe( (response: any) => {
        this.curso =  response;
      } );
  }

  updateCursos(){
    this.cursoService.actualizarCursos( this.curso ).subscribe((response)=>{
      console.log(response);
      this.curso = new Curso();
      this.showAlert = true;
    } );
  }

  fecharAlerta(){
    this.showAlert = false;
  }


}
