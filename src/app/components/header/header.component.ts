import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/users/posts.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  private unsubscriber$ = new Subject<void>();
  url: string | undefined;

  ngOnInit(): void {
    this.postsService.$currentUrl.pipe(takeUntil(this.unsubscriber$)).subscribe(
      (value: string) => (this.url = value),
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
