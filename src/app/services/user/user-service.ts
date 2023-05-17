import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginatedUsers, User } from '../../interfaces/user/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  loadPage(page: number): Observable<User[]> {
    return this.http.get<PaginatedUsers>(this.baseUrl, { params: { page: page } })
      .pipe(
        map(response => response.data)
      );
  }
}
