import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersStateModel, selectUsersState } from './users.store';

@Component({
  selector: 'users',
  template: `<h2>Users</h2>
    <div>{{ state$ | async | json }}</div>`,
})
export class UsersComponent {
  readonly state$ = this._store.select(selectUsersState);
  constructor(private _store: Store<UsersStateModel>) {}
}
