import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private API = 'http://localhost:4000/shows';

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Fetch all shows for the current user
  getMyShows() {
    return this.http.get(this.API, this.auth.getAuthHeaders());
  }

  // Add a new show
  addShow(data: { title: string; category: string; description: string }) {
    return this.http.post(this.API, data, this.auth.getAuthHeaders());
  }
}
