import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Country } from '../model.types';
import { JapanService } from '../services/japan.service';

@Component({
  selector: 'app-loading-showcase',
  templateUrl: './loading-showcase.component.html',
  styleUrls: ['./loading-showcase.component.scss']
})
export class LoadingShowcaseComponent implements OnInit, OnDestroy {

  country_O$: Observable<Country> = new Observable();
  country_S$: Subject<Country> = new Subject();
  country_BS$: BehaviorSubject<Country> = new BehaviorSubject(null);
  country_P$: Promise<Country>;

  show_BS = false;

  toUnsubscribe: Subscription;

  constructor(private japanService: JapanService) { }

  ngOnInit() {
    // This one is unsubscribed directly by the Async pipe.
    this.country_O$ = this.japanService.getCountry('country_O$');

    // Here, we take the subscription so that we can unsubscribe it onDestroy.
    this.toUnsubscribe = this.japanService.getCountry('country_S$').subscribe(country => this.country_S$.next(country));

    // What for to wait and risking to forget unsubscribing?
    // Here, we take the data once and unsubscribe directly.
    this.japanService.getCountry('country_BS$').pipe(take(1)).subscribe(country => this.country_BS$.next(country));

    // The promise doesn't need to be unsubscribe, it cancels itself automatically.
    // They are "eager",  "fulfill" themselves asap and it's done. Just take the resulting value.
    this.country_P$ = this.japanService.getCountry('country_P$').toPromise();
  }

  ngOnDestroy() {
    // This is a good way to unsubscribe, but too verbose and there is a risk to forget it.
    this.toUnsubscribe.unsubscribe();
  }
}
