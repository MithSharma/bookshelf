import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("/api/bookshelf");
  }

  updateReadStatus(body){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
    return this.http.post("/api/bookshelf",body, {
      headers: headers
    });
  }

  getSearchedItems(genre){
    const params = new HttpParams()
          .set('genre', genre);
    return this.http.get("/api/bookshelf/" + genre,{params});
  }
}
