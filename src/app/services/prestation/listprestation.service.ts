import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListprestationService {
   private apiUrl= `${environment.apiUrl}/services-proposes`;

    private getHeaders(): HttpHeaders {
       const token = localStorage.getItem('token');
       return new HttpHeaders({
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
       });
     }

  constructor(private http:HttpClient) { }

  getprestation(): Observable<any> {
    return this.http.get(this.apiUrl,{ headers: this.getHeaders() });
      }
}
