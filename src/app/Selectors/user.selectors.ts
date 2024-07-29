import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../app/Reducers/user.reducer';
import { User } from '../../models/models/user';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);

export const selectUserById = (userId: number) => createSelector(
  selectAllUsers,
  (users: User[]) => users.find(user => user.id === userId)
);
