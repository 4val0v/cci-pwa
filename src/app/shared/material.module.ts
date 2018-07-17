import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatToolbarModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
