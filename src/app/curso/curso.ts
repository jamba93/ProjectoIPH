export class Curso {

  id:number;
  nome:string;
  descricao:string;
  link:string;
  static id: number;


  public getNome() : string {
    return this.nome
  }


  public setNome(v : string) {
    this.nome = v;
  }


  public getDesc() : string {
    return this.descricao
  }

  public getLink() : string {
    return this.link
  }


}
