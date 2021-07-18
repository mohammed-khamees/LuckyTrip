import { Component, OnInit } from '@angular/core';
import { SiteService } from './../../services/site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  destination: any;
  activities: any;

  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.siteService
      .getDestination(id)
      .subscribe(({ destination, activities }) => {
        this.destination = destination;
        this.activities = activities;
      });
  }
}
