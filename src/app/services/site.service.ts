import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private apiUrl =
    'https://devapi.luckytrip.co.uk/api/2.0/top_five/destination';
  constructor(private http: HttpClient) {}

  getDestination(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${id}`);
  }
}
