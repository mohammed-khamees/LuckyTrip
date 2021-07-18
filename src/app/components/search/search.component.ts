import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SitesService } from './../../services/sites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter();
  destination: string;
  destinations: any[];

  constructor(private sitesService: SitesService) {
    this.destinations = [];
    this.destination = '';
  }

  ngOnInit(): void {}

  search(destination: string) {
    this.destination = destination;
    this.onSearch.emit(destination);
  }
}
