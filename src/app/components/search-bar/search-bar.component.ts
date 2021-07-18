import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onSearchSubmit = new EventEmitter();
  faSearch = faSearch;
  text: string;

  constructor(private router: Router) {
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

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
