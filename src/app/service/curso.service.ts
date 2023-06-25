import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Curso } from '../curso/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url =  environment.BaseUrl;

  constructor( private http: HttpClient ) { }

  salvarCursos(cursos: Curso){
    return this.http.post(this.url+"/cursos", cursos);
  }

  actualizarCursos(cursos:Curso){
    return this.http.put(this.url+"/cursos", cursos);
  }

  todoCursos(){
    return this.http.get(this.url+"/cursos");
  }

  buscarCurso(id: number){
    return this.http.get(this.url+"/cursos/" +id);

  }

  deletaCurso(id: number){
    return this.http.delete(this.url+"/cursos/" +id);
  }


}
