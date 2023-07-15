import { createFeatureSelector, createReducer } from '@ngrx/store';

export const featureKey = 'users';

export interface UsersStateModel {
  readonly count: number;
}

export const initialState: UsersStateModel = {
  count: 0,
};

export const usersReducer = createReducer(initialState);

export const selectUsersState =
  createFeatureSelector<UsersStateModel>(featureKey);
