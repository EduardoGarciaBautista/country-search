import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CountryInterface} from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly apiVersion = '/v3.1';
  private readonly apiRoot = 'https://restcountries.com';
  private readonly apiTarget = '/all';

  constructor(private http: HttpClient) {
  }

  public fetchCountryByName(): Observable<CountryInterface[]> {
    const url = `${this.apiRoot}${this.apiVersion}${this.apiTarget}`;
    return this.http.get<any[]>(url).pipe(
      map(result => result.map((data) => {
        return ({
          description: data.name.common,
          capital: data.capital ? data.capital[0] : '',
          icon: data.flags.png,
          maps: data.maps.googleMaps,
          data
        });
      }))
    );
  }
}
