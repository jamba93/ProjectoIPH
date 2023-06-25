import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Curso } from '../curso/curso';
import { CursoService } from '../service/curso.service';
import { FiltrarCursoPipe } from '../filtrar-curso.pipe';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  curso : Curso[];
  showAlert = true;

  constructor( private cursoServive: CursoService,public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cursoServive.todoCursos().subscribe( (response:any)=>{
      this.curso = response;
    });
  }
 
  deletarCurso(codigo: number){

    if( window.confirm("Deseja apagar esse curso ? ")){
      this.cursoServive.deletaCurso(codigo ).subscribe( (response) => {
        console.log(response)
        this.curso = this.curso.filter( (c: any) =>{
        this.showAlert = true;
        return codigo != c.codigo; });
      })
    }

  }

  deletarAlert(){
    this.showAlert = false;
  }

  term: string;

  
}





/**
 *  transform(lista: Curso[], pesquisaCurso :string ):any {

    if(!lista){
      return [];
    }
    if(!pesquisaCurso){
      return lista;
    }

    pesquisaCurso = pesquisaCurso.toLocaleLowerCase();
    lista = lista.filter(s=>{
        return s.nome.includes( pesquisaCurso);
    });
    return lista;
  }
 */