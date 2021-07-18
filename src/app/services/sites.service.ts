import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  private apiUrl =
    'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations';
  constructor(private http: HttpClient) {}

  getDestinations(
    search_value: string,
    search_type: string = 'none'
  ): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}?search_type=${search_type}&search_value=${search_value}`
    );
  }
}
