import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../services/users/posts.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [NgbPaginationModule],
})
export class PaginationComponent implements OnInit, OnDestroy {
  constructor(private postsService: PostsService) {}

  private unsubscriber$ = new Subject<void>();

  collectionSize!: number;
  @Input() pageSize!: number;
  @Input() page!: number;

  @Output() changedPage = new EventEmitter<number>();

  ngOnInit(): void {
    this.postsService.$postsSize.pipe(takeUntil(this.unsubscriber$)).subscribe(
      (size: number) => {
        this.collectionSize = size;
        console.log(this.collectionSize);
      },
      (error) => console.log(error)
    );
  }

  onCangedPage(value: number) {
    this.changedPage.emit(value);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(), this.unsubscriber$.complete();
  }
}
