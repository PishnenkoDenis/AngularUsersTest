import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Subscription } from 'rxjs';

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) {}

  title = 'Users';
  users: IUser[] = [];

  @Output() onClickedUser = new EventEmitter<number>();

  private usersSubscription$ = new Subscription();

  ngOnInit(): void {
    this.usersSubscription$ = this.usersService.getUsers().subscribe(
      (result: any) => (this.users = result.users),
      (error) => console.log(error)
    );
  }

  onClickUser(id: number) {
    this.onClickedUser.emit(id);
  }

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }
}
