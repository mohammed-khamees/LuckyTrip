import { Component, OnInit } from '@angular/core';
import { SitesService } from './../../services/sites.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  destination: string;
  destinations: any;
  loading: boolean = false;

  constructor(private sitesService: SitesService) {
    this.destination = '';
    this.loading = false;
  }

  ngOnInit(): void {
    this.sitesService.getDestinations('').subscribe(({ destinations }) => {
      this.destinations = destinations;
      this.loading = true;
    });
  }

  search(destination: string) {
    this.destination = destination;
    this.sitesService
      .getDestinations(this.destination, 'city')
      .subscribe(({ destinations }) => {
        if (destinations.length) this.destinations = destinations;
        else this.destinations = 'No Destinations Found!';
        this.loading = true;
      });
  }
}
