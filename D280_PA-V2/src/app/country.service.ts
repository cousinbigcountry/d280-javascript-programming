import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http.get('https://api.worldbank.org/V2/country/', {
      params: {
        action: 'query',
        format: 'json',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}
