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

  // emptyCountry = {
  //   id: '',
  //   name: '',
  //   continent: '',
  //   language: '',
  //   capital: '',
  //   population: '',
  //   density: '',
  //   gdp: '',
  // }

  country_O$: Observable<Country> = new Observable();
  
  country_S$: Subject<Country> = new Subject();

  country_BS$: BehaviorSubject<Country> = new BehaviorSubject(null);

  country_P$: Promise<Country>;

  show_BS = false;

  toUnsubscribe: Subscription;

  constructor(private japanService: JapanService) { }

  ngOnInit() {
    this.country_O$ = this.japanService.getCountry('country_O$');

    this.toUnsubscribe = this.japanService.getCountry('country_S$').subscribe(country => this.country_S$.next(country));

    // Loading and unsubscribing automatically.
    this.japanService.getCountry('country_BS$').pipe(take(1)).subscribe(country => this.country_BS$.next(country));

    this.country_P$ = this.japanService.getCountry('country_P$').toPromise();
  }

  ngOnDestroy() {
    // This is a good way to unsubscribe, but too verbose.
    this.toUnsubscribe.unsubscribe();
  }
}
