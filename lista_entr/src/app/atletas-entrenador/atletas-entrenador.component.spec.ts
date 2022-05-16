import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasEntrenadorComponent } from './atletas-entrenador.component';

describe('AtletasEntrenadorComponent', () => {
  let component: AtletasEntrenadorComponent;
  let fixture: ComponentFixture<AtletasEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletasEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletasEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
