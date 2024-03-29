import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromRoot from '../app.reducer';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _store: Store<fromRoot.State>
  ) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    return this._store.select(fromRoot.getIsAuth).pipe(take(1));
  }

  canLoad(_route: Route) {
    return this._store.select(fromRoot.getIsAuth).pipe(take(1));
  }
}
