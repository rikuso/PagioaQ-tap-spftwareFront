import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosQtapComponent } from './servicios-qtap.component';

describe('ServiciosQtapComponent', () => {
  let component: ServiciosQtapComponent;
  let fixture: ComponentFixture<ServiciosQtapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosQtapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosQtapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
