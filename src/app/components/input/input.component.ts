import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../services/users/posts.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  @ViewChild('title', { static: false }) title: ElementRef | undefined;

  ngOnInit(): void {}

  onChangeInput(value: string) {
    this.postsService.getPostsByTitle(value);
    if (this.title?.nativeElement.value) this.title.nativeElement.value = '';
  }
}
