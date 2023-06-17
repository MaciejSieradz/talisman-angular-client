import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBaseStatisticsPieChartComponent } from './deck-base-statistics-pie-chart.component';

describe('DeckBaseStatisticsPieChartComponent', () => {
  let component: DeckBaseStatisticsPieChartComponent;
  let fixture: ComponentFixture<DeckBaseStatisticsPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckBaseStatisticsPieChartComponent]
    });
    fixture = TestBed.createComponent(DeckBaseStatisticsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
