import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/users/posts.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  options: string[] = [];

  constructor(private postsService: PostsService) {}

  private unsubscriber$ = new Subject<void>();

  ngOnInit(): void {
    this.postsService.$tags.pipe(takeUntil(this.unsubscriber$)).subscribe(
      (tags: string[]) => (this.options = tags),
      (error) => console.log(error)
    );
  }

  changeTag(value: string) {
    this.postsService.getpostsByTag(value);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
