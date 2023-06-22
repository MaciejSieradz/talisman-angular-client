import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckPageComponent } from './deck-page.component';

describe('MainPageComponent', () => {
  let component: DeckPageComponent;
  let fixture: ComponentFixture<DeckPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckPageComponent]
    });
    fixture = TestBed.createComponent(DeckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
