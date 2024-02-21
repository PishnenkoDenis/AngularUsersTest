import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, debounce, interval, mergeMap } from 'rxjs';
import { IPost } from '../../components/post/post.component';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  $posts: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);
  $tags: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  $selectedTag: BehaviorSubject<string> = new BehaviorSubject<string>('');
  $currentUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
  $postsSize: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  posts: IPost[] = [];
  tags: string[] = [];
  selected: string | undefined = '';

  getPosts() {
    return this.httpClient
      .get(environment.POSTS_URL)
      .subscribe((result: any) => {
        this.posts = result.posts;
        this.tags = this.extractTags(this.posts);
        this.$posts.next(this.posts);
        this.$tags.next(this.tags);
        this.$postsSize.next(result.posts.length);
        this.$currentUrl.next(`${environment.POSTS_URL}`);
      });
  }

  extractTags(arr: IPost[]): string[] {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
      res.push(...arr[i].tags);
    }
    return Array.from(new Set(res));
  }

  getPostsByUserId(userId: number) {
    return this.httpClient
      .get(`${environment.POSTS_URL}/user/${userId}`)
      .subscribe((result: any) => {
        this.$currentUrl.next(`${environment.POSTS_URL}/user/${userId}`);
        this.$posts.next(result.posts);
      });
  }

  getpostsByTag(value: string) {
    const filterd = this.posts.filter((post) => post.tags.includes(value));
    this.selected = this.tags.find((tag) => tag === value);
    if (this.selected) this.$selectedTag.next(this.selected);
    if (filterd.length) this.$posts.next(filterd);
    else this.$posts.next([]);
  }

  getPostsByTitle(value: string) {
    const postsFilterd = this.posts.filter((post) =>
      post.title.includes(value)
    );
    if (postsFilterd.length) this.$posts.next(postsFilterd);
    else this.$posts.next([]);
  }

  resetPosts() {
    this.$posts.next(this.posts);
    this.$currentUrl.next(`${environment.POSTS_URL}`);
  }
}
