import { Directive, HostBinding, Input } from '@angular/core';
import { PostsService } from '../services/users/posts.service';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective {
  @Input() selectedTag = '';
  private fontWeight = 'bold';

  constructor(private postsService: PostsService) {}

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.postsService.selected === this.selectedTag
      ? this.fontWeight
      : null;
  }
}
