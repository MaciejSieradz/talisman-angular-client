import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {DeckStatistics} from "../../models/deck-statistics";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-deck-base-statistics-pie-chart',
  templateUrl: './deck-base-statistics-pie-chart.component.html',
  styleUrls: ['./deck-base-statistics-pie-chart.component.css']
})
export class DeckBaseStatisticsPieChartComponent implements OnInit, OnChanges{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() data?: DeckStatistics;

  public pieChartPlugins = [ DatalabelsPlugin ];

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: "Podział kart"
      },
      datalabels: {
        formatter: (value, ctx) => {
          if(ctx.chart.data.labels && this.data) {
            return (Number(ctx.chart.data.datasets[0].data[ctx.dataIndex])/this.data?.numberOfCards * 100).toFixed(2) + "%";
          }
          return 0;
        },
      },
    }
  };

  public pieChartData : ChartData<'pie', number[], string | string[]> = {
      labels: ['Zdarzenia', 'Nieznajomi', 'Miejsca', 'Przyjaciele', 'Przedmioty', 'Wrogowie'],
      datasets: [ {
        data: [
          0,0,0,0,0,0
        ],
      }]
    };

  constructor() {
  }


  ngOnInit() {
    this.chart?.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data != undefined) {
      this.pieChartData.datasets[0].data = [
        this.data.numberOfEvents,
        this.data.numberOfStrangers,
        this.data.numberOfPlaces,
        this.data.numberOfFollowers,
        this.data.numberOfItems,
        this.data.numberOfEnemies];

      this.chart?.update();
    }
  }
}
