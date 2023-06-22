import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBaseStatisticsBarChartComponent } from './deck-base-statistics-bar-chart.component';

describe('DeckBaseStatisticsBarChartComponent', () => {
  let component: DeckBaseStatisticsBarChartComponent;
  let fixture: ComponentFixture<DeckBaseStatisticsBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckBaseStatisticsBarChartComponent]
    });
    fixture = TestBed.createComponent(DeckBaseStatisticsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
