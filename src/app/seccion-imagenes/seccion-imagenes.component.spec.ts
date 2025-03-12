import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionImagenesComponent } from './seccion-imagenes.component';

describe('SeccionImagenesComponent', () => {
  let component: SeccionImagenesComponent;
  let fixture: ComponentFixture<SeccionImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionImagenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
