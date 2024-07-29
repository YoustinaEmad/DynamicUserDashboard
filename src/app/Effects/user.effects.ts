import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../Services/UserService ';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure } from '../Actions/UserAction';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(action => this.userService.getUsers(action.page).pipe(
      map(users => loadUsersSuccess({ users: users.data })),
      catchError(error => of(loadUsersFailure({ error })))
    ))
  ));

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(loadUser),
    mergeMap(action => this.userService.getUserById(action.id).pipe(
      map(user => loadUserSuccess({ user: user.data })),
      catchError(error => of(loadUserFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
