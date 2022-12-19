import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {} as User;
  getUser() {
    return this.user;
  }
  postUser(user: User) {
    this.user = {
      name: user.name,
      address: user.address,
      credit: user.credit
    }
  }
}
