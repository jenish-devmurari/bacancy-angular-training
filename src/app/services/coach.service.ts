import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private apiUrl = 'https://localhost:7127/api/Coach';

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  appointCaptain(playerEmail: string): Observable<any> {
    return this.http.post('https://localhost:7127/api/Coach/AddCaptain', playerEmail);
  }
}
