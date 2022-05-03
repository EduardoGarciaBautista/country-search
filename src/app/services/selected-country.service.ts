import {Injectable} from '@angular/core';
import {CountryInterface} from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedCountryService {

  private _selectedCountry: CountryInterface | null = null;


  get selectedCountry(): CountryInterface | null {
    return this._selectedCountry;
  }

  set selectedCountry(value: CountryInterface | null) {
    this._selectedCountry = value;
  }

  constructor() {
  }
}
