import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformamosIdeasComponent } from './transformamos-ideas.component';

describe('TransformamosIdeasComponent', () => {
  let component: TransformamosIdeasComponent;
  let fixture: ComponentFixture<TransformamosIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformamosIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformamosIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
