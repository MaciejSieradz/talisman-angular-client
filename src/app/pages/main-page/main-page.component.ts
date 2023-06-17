import {Component, Input, OnInit} from '@angular/core';
import {DeckService} from "../../services/deck.service";
import {BaseChartDirective} from "ng2-charts";
import {Deck} from "../../models/deck";
import {DeckStatistics} from "../../models/deck-statistics";
import {ActivatedRoute} from "@angular/router";

const deck_name_mapper = new Map<string, string>([
  ["all", "Wszystkie talie"],
  ["forrest_deck", "Talia lasu"],
  ["mountain_deck", "Talia gór"],
  ["city_deck", "Talia miasta"],
  ["dungeon_deck", "Talia podziemi"],
  ["tunnel_deck", "Talia tunelu"],
  ["bridge_deck", "Talia mostu"],
  ["adventure_deck", "Talia przygód"]
]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  nameOfDeck: string;
  title?: string;
  deck?: Deck;

  public deckStatisticsUnique : DeckStatistics =
    new DeckStatistics(0,0,0,0,0,0,0);

  public deckStatisticsAll : DeckStatistics =
    new DeckStatistics(0,0,0,0,0,0,0);

  constructor(private deckService: DeckService, private activatedRoute: ActivatedRoute) {
    this.nameOfDeck = activatedRoute.snapshot.params['deck-name'];
  }

  getDeckFromName() {
    this.deckService.getDeckFromName(this.nameOfDeck).subscribe(deck => {
      this.deck = deck;
    });
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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routerParams => {
      this.nameOfDeck = routerParams['deck-name'];
      this.title = deck_name_mapper.get(this.nameOfDeck);
      this.getDeckFromName();
      this.getBasicStatisticsFromUniqueCards();
      this.getBasicStatisticsFromAllCards();
    });
  }
}
