import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  postsUrl = 'https://dummyjson.com/posts';

  getPosts() {
    return this.httpClient.get(this.postsUrl);
  }
}
