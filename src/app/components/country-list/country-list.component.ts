import {Component, Input, OnInit} from '@angular/core';
import {CountryInterface} from '../../interfaces/country.interface';
import {SelectedCountryService} from '../../services/selected-country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  @Input() search = '';
  @Input() countryList: CountryInterface[] = [];

  constructor(private selected: SelectedCountryService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public goToDetail(country: CountryInterface): void {
   this.selected.selectedCountry = country;
   localStorage.setItem('search', this.search);
   localStorage.setItem('storedCountry', JSON.stringify(country));
   this.router.navigate(['/detail'])
  }
}
