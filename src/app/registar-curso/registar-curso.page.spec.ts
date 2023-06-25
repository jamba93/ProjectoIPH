import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegistarCursoPage } from './registar-curso.page';

describe('RegistarCursoPage', () => {
  let component: RegistarCursoPage;
  let fixture: ComponentFixture<RegistarCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistarCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
