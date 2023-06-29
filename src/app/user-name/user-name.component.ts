import { Component, Input } from '@angular/core';
import { UserService, User } from '../user.service';

// Рефакторинг компонента.

// Компонент принимает userId.
// Запрашивает по этому id данные пользователя через UserService.getUserById(id)
// Показывает имя пользователя (user.name)

@Component({
  selector: 'app-user-name',
  template: `
    <div>{{user.name}}</div>
  `,
})
export class UserNameComponent {
  @Input() userId: string;
  user: User;

  constructor() {
    const userService = new UserService();
    userService
      .getUserById(this.userId)
      .subscribe((userData) => (this.user = userData));
  }
}
