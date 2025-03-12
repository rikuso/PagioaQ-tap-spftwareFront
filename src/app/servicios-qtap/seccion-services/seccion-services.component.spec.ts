import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionServicesComponent } from './seccion-services.component';

describe('SeccionServicesComponent', () => {
  let component: SeccionServicesComponent;
  let fixture: ComponentFixture<SeccionServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
