import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPageComponent } from './pokedex-page.component';

describe('PokedexPageComponent', () => {
  let component: PokedexPageComponent;
  let fixture: ComponentFixture<PokedexPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexPageComponent]
    });
    fixture = TestBed.createComponent(PokedexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
