import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroServicesComponent } from './hero-services.component';

describe('HeroServicesComponent', () => {
  let component: HeroServicesComponent;
  let fixture: ComponentFixture<HeroServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
