import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Input() destinations: any[];
  @Input() loading: boolean;

  constructor() {
    this.destinations = [];
    this.loading = false;
  }

  ngOnInit(): void {}
}
