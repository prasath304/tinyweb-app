import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlModel } from '../Model/Url.model';
import { Observable } from 'rxjs';
import { Url } from 'url';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
    private apiUrl = 'https://localhost:7168/api'; // adjust to your Minimal API base URL

  constructor(private http: HttpClient) {}

  // GET all URLs
  getUrls(): Observable<UrlModel[]> {
    return this.http.get<UrlModel[]>(`${this.apiUrl}/GetAll`);
  }

  // GET single URL by id
  getUrl(id: number): Observable<UrlModel> {
    return this.http.get<UrlModel>(`${this.apiUrl}/${id}`);
  }

  // POST new URL
  saveUrl(url: UrlModel): Observable<UrlModel[]> {
    return this.http.post<UrlModel[]>(`${this.apiUrl}/Save`, url);
  }

    DeleteUrlById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`);
  }
     DeleteAllUrls(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteAll`);
  }
  

}
