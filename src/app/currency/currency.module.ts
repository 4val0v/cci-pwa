import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material.module';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { ListItemComponent } from './currency-list/list-item/list-item.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    CurrencyListComponent,
    ListItemComponent
  ],
  exports: [CurrencyListComponent]
})
export class CurrencyModule { }
