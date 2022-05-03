import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

  public value = '';

  constructor() {
  }

  ngOnInit(): void {
    const search = localStorage.getItem('search');
    if (search) {
      this.value = search;
      this.searchChanged.emit(search);
      localStorage.removeItem('search');
    }
  }

  public getSearchChange(word: string): void {
    this.searchChanged.emit(word);
  }
}
