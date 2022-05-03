import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountryDetailRoutingModule} from './country-detail-routing.module';
import {CountryDetailComponent} from './country-detail.component';
import {ButtonComponent} from '../../components/button/button.component';


@NgModule({
  declarations: [
    CountryDetailComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountryDetailModule {
}
