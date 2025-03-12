import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenTextoComponent } from './imagen-texto.component';

describe('ImagenTextoComponent', () => {
  let component: ImagenTextoComponent;
  let fixture: ComponentFixture<ImagenTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenTextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
