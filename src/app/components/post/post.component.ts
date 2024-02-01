import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/users/posts.service';
import { Subscription } from 'rxjs';

interface IPost {
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  title = 'Posts';
  posts: IPost[] = [];

  private postSubscriptions$ = new Subscription();

  ngOnInit(): void {
    this.postSubscriptions$ = this.postsService.getPosts().subscribe(
      (result: any) => (this.posts = result.posts),
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.postSubscriptions$.unsubscribe();
  }
}
