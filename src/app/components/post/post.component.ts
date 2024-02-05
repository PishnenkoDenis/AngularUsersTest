import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PostsService } from '../../services/users/posts.service';
import { Subscription } from 'rxjs';

interface IPost {
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private postsService: PostsService) {}

  title = 'Posts';
  posts: IPost[] = [];

  @Input() userId: number | null = null;

  private postSubscriptions$ = new Subscription();
  private postSubscriptionsByUserId$ = new Subscription();

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['userId'].currentValue &&
      changes['userId'].previousValue !== changes['userId'].currentValue
    ) {
      this.postSubscriptionsByUserId$ = this.postsService
        .getPostsByUserId(changes['userId'].currentValue)
        .subscribe(
          (result: any) => (this.posts = result.posts),
          (error) => console.log(error)
        );
    }
  }

  ngOnInit(): void {
    this.postSubscriptions$ = this.postsService.getPosts().subscribe(
      (result: any) => (this.posts = result.posts),
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.postSubscriptions$.unsubscribe();
    this.postSubscriptionsByUserId$.unsubscribe();
  }
}
