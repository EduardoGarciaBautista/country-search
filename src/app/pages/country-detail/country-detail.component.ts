import {Component, OnInit} from '@angular/core';
import {SelectedCountryService} from '../../services/selected-country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  constructor(public selected: SelectedCountryService,
              private router: Router) {
    const item = localStorage.getItem('storedCountry');

    if (!selected.selectedCountry && item) {
      this.selected.selectedCountry = JSON.parse(item);
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  openInMaps(url: string): void {
    window.open(url)
  }
}
