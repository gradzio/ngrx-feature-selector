import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel, selectAppState } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrxapp';
  readonly state$ = this._store.select(selectAppState);
  constructor(private _store: Store<AppStateModel>) {}
}
