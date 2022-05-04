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

  public showSpinner = false;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.getCountry();
  }

  public getCountry(): void {
    this.showSpinner = true;
    this.countryList = [];
    this.countryService.fetchCountryByName().subscribe(result => {
      this.countryList = result;
      this.showSpinner = false;
    }, error => {
      this.countryList = [];
      console.log('Can not get country', error);
      this.showSpinner = false;
    })
  }

  public openInMaps(country: CountryInterface): void {

  }

}
