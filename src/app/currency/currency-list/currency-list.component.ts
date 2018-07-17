import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyListItem } from '../shared/currency.model';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: 'currency-list.component.html'
})
export class CurrencyListComponent implements OnInit {
  currencyList: Observable<CurrencyListItem[]>;
  totalSumm = this.currencyService.totalSum;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyList = this.currencyService.getCurrencyList();
  }
}
