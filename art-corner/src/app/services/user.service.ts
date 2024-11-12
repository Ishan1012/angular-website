import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/model/User';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = 
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  constructor(
    private http:HttpClient,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platfromId: any
  ) { 
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Art Corner ${user.name}!`,
            'Login Successful'
          )
        },
        error: () => {
          this.toastrService.error('Given Username or Password is not Valid', 'Login Failed');
        }
      })
    );
  }

  logout(){
    this.userSubject.next(new User());
    if(isPlatformBrowser(this.platfromId))
      localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    if(isPlatformBrowser(this.platfromId))
      localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User{
    let userJson;
    if(typeof window !== 'undefined') {
      userJson = localStorage.getItem(USER_KEY);
    }

    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
