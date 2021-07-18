import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css'],
})
export class SearchButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
