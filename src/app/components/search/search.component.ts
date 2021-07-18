import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SitesService } from './../../services/sites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  destination: string;
  destinations: any[];

  constructor(private sitesService: SitesService) {
    this.destinations = [];
    this.destination = '';
  }

  ngOnInit(): void {
    this.sitesService
      .getDestinations('')
      .subscribe(({ destinations }) => (this.destinations = destinations));
  }

  search(destination: string) {
    this.destination = destination;
    this.sitesService
      .getDestinations(this.destination, 'city')
      .subscribe(({ destinations }) => {
        this.destinations = destinations;
      });
  }
}
