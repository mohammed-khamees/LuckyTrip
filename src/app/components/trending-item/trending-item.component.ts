import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.css'],
})
export class TrendingItemComponent implements OnInit {
  @Input() destination: any;

  constructor() {}

  ngOnInit(): void {}
}
