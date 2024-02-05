import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularUsersTest';

  userId: number | null = null;

  onSelectedUser(id: number) {
    id ? (this.userId = id) : (this.userId = null);
  }
}
