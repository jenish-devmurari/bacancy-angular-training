import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay']
      console.log('preload called on ' + route.path + ' with a delay of ' + delay);
      return timer(delay).pipe(
        tap(() => {
          console.log("Loading now " + route.path + ' module');
          return load();
        }));
    } else {
      console.log('no preload for the path ' + route.path);
      return of(null);
    }
  }
}
