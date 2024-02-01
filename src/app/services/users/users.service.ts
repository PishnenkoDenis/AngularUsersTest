import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  usersUrl = 'https://dummyjson.com/users';

  getUsers() {
    return this.httpClient.get(environment.USERS_URL);
  }
}
