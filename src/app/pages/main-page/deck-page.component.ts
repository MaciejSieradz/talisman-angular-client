import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DeckService} from "../../services/deck.service";
import {BaseChartDirective} from "ng2-charts";
import {Deck} from "../../models/deck";
import {DeckStatistics} from "../../models/deck-statistics";
import {ActivatedRoute} from "@angular/router";
import {EnemiesStatistics} from "../../models/enemies-statistics";
import {Card} from "../../models/card";
import {BarChartComponent} from "../../shared/bar-chart/bar-chart.component";
import defaultCallbacks from "chart.js/dist/plugins/plugin.tooltip";

const deck_name_mapper = new Map<string, string>([
  ["all", "Wszystkie talie"],
  ["forrest_deck", "Talia lasu"],
  ["mountain_deck", "Talia gór"],
  ["city_deck", "Talia miasta"],
  ["dungeon_deck", "Talia podziemi"],
  ["tunnel_deck", "Talia tunelu"],
  ["bridge_deck", "Talia mostu"],
  ["adventure_deck", "Talia przygód"],
  ["nether_deck", "Talia nieszczęść"],
  ["harbinger_deck", "Talia proroke"],
  ["residue_deck", "Talia pozostałości"]
]);

@Component({
  selector: 'app-main-page',
  templateUrl: './deck-page.component.html',
  styleUrls: ['./deck-page.component.css']
})
export class DeckPageComponent implements OnInit, AfterViewInit{

  nameOfDeck: string;
  title?: string;
  deck?: Deck;
  enemies: Array<Card> = [];

  @ViewChild(BarChartComponent) enemiesBarChart:  BarChartComponent | undefined;

  public deckStatisticsUnique : DeckStatistics =
    new DeckStatistics(0,0,0,0,0,0,0);

  public deckStatisticsAll : DeckStatistics =
    new DeckStatistics(0,0,0,0,0,0,0);

  public enemiesStatistics : EnemiesStatistics =
    new EnemiesStatistics(0,0,0,0,0,0,0,0,0);

  constructor(private deckService: DeckService, private activatedRoute: ActivatedRoute) {
    this.nameOfDeck = activatedRoute.snapshot.params['deck-name'];
  }

  getDeckFromName() {
    this.deckService.getDeckFromName(this.nameOfDeck).subscribe(deck => {
      this.deck = deck;
    });
  }

  getEnemiesFromDeck() {
    this.deckService.getEnemies(this.nameOfDeck).subscribe(cards => {

      if (this.enemiesBarChart != undefined) {
        this.enemiesBarChart.barChartData = {
          labels: cards.map(card => card.fightPower),
          datasets: [
            {data: cards.map(card => card.numberOfStrengthEnemies), label: 'Siła'},
            {data: cards.map(card => card.numberOfPowerEnemies), label: 'Moc'},
            {data: cards.map(card => card.numberOfStrengthOrPowerEnemies), label: 'Siła lub Moc'},
        ]};
        this.enemiesBarChart.chart?.update();
      }
    })
  }

  getBasicStatisticsFromUniqueCards() {
    if(this.nameOfDeck == 'all') {
      this.deckService.getBasicStatisticsFromUniqueCardsFromAllDecks().subscribe(statistics => {
        this.deckStatisticsUnique = statistics;
      });
    }
    else {
      this.deckService.getBasicStatisticsFromUniqueCardsFromDeck(this.nameOfDeck).subscribe(statistics => {
        this.deckStatisticsUnique = statistics;
      });
    }
  }

  getBasicStatisticsFromAllCards() {
    if(this.nameOfDeck == 'all') {
      this.deckService.getBasicStatisticsFromAllCardsFromAllDecks().subscribe(statistics => {
        this.deckStatisticsAll = statistics;
      });
    }
    else {
      this.deckService.getBasicStatisticsFromAllCardsFromDeck(this.nameOfDeck).subscribe(statistics => {
        this.deckStatisticsAll = statistics;
      });
    }
  }

  getEnemiesStatistics() {
    if(this.nameOfDeck == 'all') {
      this.deckService.getEnemiesStatisticsFromDeck("adventure_deck").subscribe(stats => {
        this.enemiesStatistics = stats;
      })
    }
    else {
      this.deckService.getEnemiesStatisticsFromDeck(this.nameOfDeck).subscribe(stats => {
        this.enemiesStatistics = stats;
      })
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routerParams => {
      this.nameOfDeck = routerParams['deck-name'];
      this.title = deck_name_mapper.get(this.nameOfDeck);
      this.getDeckFromName();
      this.getBasicStatisticsFromUniqueCards();
      this.getBasicStatisticsFromAllCards();
      this.getEnemiesStatistics();
      this.getEnemiesFromDeck();
    });
  }

  ngAfterViewInit() {

  }
}
