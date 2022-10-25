import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isUserLogedIn: boolean = false;
  userCredentials?: User;
  logedIn() {
    this.checkStorage();
    return this.isUserLogedIn;
  }
  checkStorage() {
    if (localStorage.getItem('user')) {
      this.isUserLogedIn = true;
      this.userCredentials = JSON.parse(localStorage.getItem('user')!);
    } else {
      this.isUserLogedIn = false;
      this.userCredentials = undefined;
    }
  }
  logout() {
    this.isUserLogedIn = false;
    this.userCredentials = undefined;
    localStorage.removeItem('user');
  }

  checkIfUsernameExists$(username: string): Observable<boolean> {
    return this.http
      .get<User[]>(`http://localhost:3000/users?username=${username}`)
      .pipe(
        map((users: User[]) => {
          return users.length > 0 ? true : false;
        })
      );
  }
  register$(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }
  handleUserLogin(user: User): void {
    this.isUserLogedIn = true;
    this.userCredentials = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  login$(username: string, password: string) {
    return this.http
      .get<User[]>(
        `http://localhost:3000/users?username=${username}&password=${password}&validated=true`
      )
      .pipe(
        map((users: User[]) => {
          if (users.length > 0) {
            users[0].password = undefined;
            return users[0];
          } else {
            throw new Error('Invalid username or password');
          }
        })
      );
  }
  validateUser$(id: number): Observable<boolean> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`).pipe(
      delay(3000),
      tap((user: User) => {
        console.log(user);
      }),
      switchMap((user: User) => {
        if (!user.validated) {
          user.validated = true;
          return this.http.put<User>(`http://localhost:3000/users/${id}`, user);
        } else {
          return of(false);
        }
      }),
      map((res: User | boolean) => {
        return res ? true : false;
      }),
      catchError((err: Error) => {
        console.log(err);
        return of(false);
      })
    );
  }
}
