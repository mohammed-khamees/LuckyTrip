import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

  search(destination: string) {
    console.log(destination);

    this.sitesService
      .getDestinations(destination)
      .subscribe(({ destinations }) => (this.destinations = destinations));
  }
}
