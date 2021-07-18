import { Component, OnInit, Input } from '@angular/core';
import { SitesService } from './../../services/sites.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Input() destination: string;
  destinations: any[];

  constructor(private sitesService: SitesService) {
    this.destinations = [];
    this.destination = '';
  }

  ngOnInit(): void {
    console.log(this.destination);

    this.sitesService
      .getDestinations('')
      .subscribe(({ destinations }) => (this.destinations = destinations));
  }
}
