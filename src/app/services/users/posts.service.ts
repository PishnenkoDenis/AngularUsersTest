import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../../components/post/post.component';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  $posts: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  posts: IPost[] = [];

  getPosts() {
    return this.httpClient
      .get(environment.POSTS_URL)
      .subscribe((result: any) => {
        this.posts = result.posts;
        this.$posts.next(this.posts);
      });
  }

  getPostsByUserId(userId: number) {
    return this.httpClient
      .get(`${environment.POSTS_URL}/user/${userId}`)
      .subscribe((result: any) => {
        this.posts = result.posts;
        this.$posts.next(this.posts);
      });
  }

  getPostsByTitle(value: string) {
    const postsFilterd = this.posts.filter((post) =>
      post.title.includes(value)
    );
    if (postsFilterd.length) this.$posts.next(postsFilterd);
    else this.$posts.next([]);
  }
}
