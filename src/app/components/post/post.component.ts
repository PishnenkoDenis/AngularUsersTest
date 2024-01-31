import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/users/posts.service';

interface IPost {
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  title = 'Posts';
  posts: IPost[] = [];

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .subscribe((result: any) => (this.posts = result.posts));
  }
}
