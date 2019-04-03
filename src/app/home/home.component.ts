import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {GetData} from '@store/actions/search.actions';
import {SearchState} from '@store/states/search.state';
import { AppState } from '@store/states/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    /*this.store.select('search').subscribe((data: SearchState) => {
      console.log(data);
    } );*/
    this.store.dispatch(new GetData());
  }

}
