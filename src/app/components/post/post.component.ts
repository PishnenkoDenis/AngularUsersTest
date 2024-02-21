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

export interface IPost {
  title: string;
  body: string;
  userId: number;
  tags: string[];
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private postsService: PostsService) {}

  title = 'Posts';
  tagsTitle = 'tags:';
  posts: IPost[] = [];
  tags: string[] = [];
  pageSize = 5;
  collectionSize = 0;
  page = 1;

  @Input() userId: number | null = null;

  private postSubscriptions$ = new Subscription();
  private postSubscriptionsByUserId$ = new Subscription();

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['userId'].currentValue &&
      changes['userId'].previousValue !== changes['userId'].currentValue
    ) {
      this.postsService.getPostsByUserId(changes['userId'].currentValue);
      this.postSubscriptionsByUserId$ = this.postsService.$posts.subscribe(
        (result: any) => (this.posts = result),
        (error) => console.log(error)
      );
    }
  }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postSubscriptions$ = this.postsService.$posts.subscribe(
      (result: any) => {
        this.posts = result;
        this.collectionSize = this.posts.length;
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.postSubscriptions$.unsubscribe();
    this.postSubscriptionsByUserId$.unsubscribe();
  }

  onChangePage(event: number) {
    this.page = event;
  }
}
