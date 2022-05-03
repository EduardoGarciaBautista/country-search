import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../services/country.service';
import {CountryInterface} from '../../interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countryList: CountryInterface[] = [];

  public wordToSearch = '';

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
  }

  public getCountry(word: string): void {
    this.wordToSearch = word;
    this.countryList = [];
    this.countryService.fetchCountryByName(word).subscribe(result => {
      this.countryList = result;
    }, error => {
      this.countryList = [];
      console.log('Can not get country');
    })
  }

  public openInMaps(country: CountryInterface): void {

  }

}
