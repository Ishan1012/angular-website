import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/model/User';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;
  constructor(
    private http:HttpClient,
    private toastrService: ToastrService
  ) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    console.log("login");
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Art Corner ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.userSubject.error(errorResponse.error);
        }
      })
    );
  }
}
