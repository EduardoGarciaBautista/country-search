import {Pipe, PipeTransform} from '@angular/core';
import {CountryInterface} from '../interfaces/country.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Array<CountryInterface>, search: string): CountryInterface[] {
    if (!search) {
      return list;
    }
    const lowerSearch = search.toLowerCase().trim();

    return list.filter(({description, capital}) =>
      description.toLowerCase().trim().includes(lowerSearch)
      || capital.toLowerCase().trim().includes(lowerSearch));
  }

}
