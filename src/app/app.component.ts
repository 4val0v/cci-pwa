import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RefresherService } from './core/refresher.service';
import { TotalAmountService } from './core/total-amount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  totalAmount = this.totalAmountService.totalAmount;

  constructor(
    private refresher: RefresherService,
    private totalAmountService: TotalAmountService
  ) { }

  refreshCurrencies() {
    this.refresher.refreshCurrencyList().emit();
  }
}
