import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import {EnemiesStatistics} from "../../models/enemies-statistics";

@Component({
  selector: 'app-deck-base-statistics-bar-chart',
  templateUrl: './deck-base-statistics-bar-chart.component.html',
  styleUrls: ['./deck-base-statistics-bar-chart.component.css']
})
export class DeckBaseStatisticsBarChartComponent implements OnInit, OnChanges{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() data?: EnemiesStatistics;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'center',
        align: 'center'
      },
      title: {
        display: true,
        text: 'Podział wrogów ze względu na typ'
      }
    }
  };
  public barChartPlugins = [
    DataLabelsPlugin
  ];


  public barChartData: ChartData<'bar'> = {
    labels: [ 'SIŁA', 'MOC'],
    datasets: [
      { data: [ 0, 0, ], label: 'Ilość wrogów' }
    ]
  };

  ngOnInit() {
    this.chart?.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data != undefined) {
      this.barChartData.datasets[0].data = [
        this.data.numberOfEnemiesWithStrength,
        this.data.numberOfEnemiesWithPower
      ];

      this.chart?.update();
    }
  }
}
