import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/users/posts.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss'],
})
export class ResetButtonComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  title = 'Reset';

  ngOnInit(): void {}

  onResetClick() {
    this.postsService.resetPosts();
  }
}
