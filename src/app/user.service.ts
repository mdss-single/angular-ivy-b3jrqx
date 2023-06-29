import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, of, observeOn, delay } from 'rxjs';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: '1', name: 'Kevin' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Alica' },
    { id: '4', name: 'Max' },
    { id: '5', name: 'Ilon' },
    { id: '6', name: 'Bruce' },
  ];

  getUserById(id: string): Observable<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return of(user).pipe(delay(1000));
  }
}
