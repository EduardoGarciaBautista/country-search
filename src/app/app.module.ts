import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {CountryListComponent} from './components/country-list/country-list.component';


import {DebounceDirective} from './directives/debounce.directive';
import {CountryService} from './services/country.service';
import {SelectedCountryService} from './services/selected-country.service';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DebounceDirective,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFirestoreModule
  ],
  providers: [
    CountryService,
    SelectedCountryService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
