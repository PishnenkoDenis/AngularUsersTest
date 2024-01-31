import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

interface IUser {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  title = 'Users';
  users: IUser[] = [];

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .subscribe((result: any) => (this.users = result.users));
  }
}
