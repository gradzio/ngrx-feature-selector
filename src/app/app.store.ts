import { UsersStateModel } from './users/users.store';

export interface AppStateModel {
  readonly users: UsersStateModel;
}

export const selectAppState = (state: AppStateModel) => state;
