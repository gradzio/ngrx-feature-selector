import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureKey, usersReducer } from './users.store';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(featureKey, usersReducer)],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
