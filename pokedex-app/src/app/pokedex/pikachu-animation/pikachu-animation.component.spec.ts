import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PikachuAnimationComponent } from './pikachu-animation.component';

describe('PikachuAnimationComponent', () => {
  let component: PikachuAnimationComponent;
  let fixture: ComponentFixture<PikachuAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PikachuAnimationComponent]
    });
    fixture = TestBed.createComponent(PikachuAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
