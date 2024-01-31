import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  usersUrl = 'https://dummyjson.com/users';

  getUsers() {
    return this.httpClient.get(this.usersUrl);
  }
}
