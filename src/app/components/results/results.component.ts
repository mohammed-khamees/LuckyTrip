import { Component, OnInit } from '@angular/core';
import { SiteService } from './../../services/site.service';
import { SitesService } from './../../services/sites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  destination: any;
  activities: any;
  id: number = 0;

  constructor(
    private sitesService: SitesService,
    private siteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.siteService
      .getDestination(this.id)
      .subscribe(({ destination, activities }) => {
        this.destination = destination;
        this.activities = activities;
      });
  }

  search(destination: string) {
    this.destination = destination;
    this.sitesService
      .getDestinations(this.destination, 'city')
      .subscribe(({ destinations }) => {
        console.log(destinations);

        this.destination = destinations[0];
        this.id = destinations[0].id;
      });

    this.siteService
      .getDestination(this.id)
      .subscribe(({ destination, activities }) => {
        this.destination = destination;
        this.activities = activities;
      });
  }
}
