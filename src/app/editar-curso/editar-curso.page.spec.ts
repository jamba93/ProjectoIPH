import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCursoPage } from './editar-curso.page';

describe('EditarCursoPage', () => {
  let component: EditarCursoPage;
  let fixture: ComponentFixture<EditarCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
