import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CurrencyModule } from './currency/currency.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    CurrencyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
