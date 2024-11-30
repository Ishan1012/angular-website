import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/model/User';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { GET_USER_LIST_URL, POST_FEEDBACK, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { IFeedback } from '../shared/interfaces/IFeedback';
import { Feedback } from '../shared/model/Feedback';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = 
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  
  private feedbackSubject = 
  new BehaviorSubject<Feedback>(new Feedback());
  public feedbackObservable: Observable<Feedback>;

  constructor(
    private http:HttpClient,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platfromId: any
  ) { 
    this.userObservable = this.userSubject.asObservable();
    this.feedbackObservable = this.feedbackSubject.asObservable();
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

  register(userRegister: IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to The Art Corner ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.toastrService.error(errorResponse.error,
            'Register Failed'
          )
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

  sendFeedback(feedbackRegister: IFeedback): Observable<Feedback>{
    return this.http.post<Feedback>(POST_FEEDBACK, feedbackRegister).pipe(
      tap({
        next: (user) => {
          this.feedbackSubject.next(user);
          this.toastrService.success(
            `Thank you for providing your feedback and helping us improve.`,
            'Feedback Uploaded'
          )
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.toastrService.error(errorResponse.error,
            'Uploading Failed!'
          )
        }
      })
    ); 
  }

  getUsers(user: User): Observable<User[]> {
    if (user.isAdmin) {
      return this.http.get<User[]>(GET_USER_LIST_URL);
    } else {
      return new Observable<User[]>((observer) => {
        observer.next([]); // Return an empty array for non-admin users
        observer.complete();
      });
    }
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
