import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { CurrencyService } from '../../shared/currency.service';
import { CurrencyInfo, CurrencyListItem } from './../../shared/currency.model';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html'
})
export class ListItemComponent implements OnInit {
  @Input() currency: CurrencyListItem;

  currencyInfo = new Subject<CurrencyInfo | -1>();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.fetchCurrencyInfo();
    this.reloadCurrencyList();
  }

  private reloadCurrencyList() {
    this.currencyService.reloadCurrencyList
      .subscribe(() => {
        this.currencyInfo.next(null);
        this.fetchCurrencyInfo();
      });
  }

  private fetchCurrencyInfo() {
    this.currencyService.fetchCurrencyInfo(this.currency.id)
      .subscribe(
        (info: CurrencyInfo) => {
          this.currencyInfo.next(info);
          this.currencyService.addSumToTotal(+info.price_usd * this.currency.amount);
        },
        () => {
          this.currencyInfo.next(-1);
        }
      );
  }
}
