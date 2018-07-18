import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { RefresherService } from '../../../core/refresher.service';
import { TotalAmountService } from '../../../core/total-amount.service';
import { CurrencyService } from '../../shared/currency.service';
import { CurrencyInfo, CurrencyListItem } from './../../shared/currency.model';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html'
})
export class ListItemComponent implements OnInit {
  @Input() currency: CurrencyListItem;

  currencyInfo = new Subject<CurrencyInfo | -1>();

  constructor(
    private currencyService: CurrencyService,
    private refresher: RefresherService,
    private totalAmountService: TotalAmountService
  ) { }

  ngOnInit() {
    this.fetchCurrencyInfo$();
    this.refreshCurrencyList$();
  }

  private refreshCurrencyList$() {
    this.refresher.refreshCurrencyList()
      .subscribe(() => {
        this.currencyInfo.next(null);
        this.fetchCurrencyInfo$();
      });
  }

  private fetchCurrencyInfo$() {
    this.currencyService.fetchCurrencyInfo(this.currency.id)
      .subscribe(
        (info: CurrencyInfo) => {
          this.currencyInfo.next(info);
          this.totalAmountService.addAmountToTotal(+info.price_usd * this.currency.amount);
        },
        () => {
          this.currencyInfo.next(-1);
        }
      );
  }
}
