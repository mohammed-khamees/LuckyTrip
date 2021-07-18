import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onSearchSubmit = new EventEmitter();
  faSearch = faSearch;
  text: string;

  constructor() {
    this.text = '';
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      return;
    }

    this.onSearchSubmit.emit(this.text);
    this.text = '';
  }
}
