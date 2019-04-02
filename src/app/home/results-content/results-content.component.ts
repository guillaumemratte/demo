import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-results-content',
  templateUrl: './results-content.component.html',
  styleUrls: ['./results-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
