import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/models/user';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure } from '../Actions/UserAction';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  error: any;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user })),
  on(loadUserFailure, (state, { error }) => ({ ...state, error }))
);
