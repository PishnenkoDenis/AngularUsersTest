import { Component, OnInit } from '@angular/core';

export type TTags =
  | 'magical'
  | 'crime'
  | 'history'
  | 'american'
  | 'french'
  | 'english';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  title = 'Filters';

  tags: Array<TTags> = [
    'magical',
    'crime',
    'history',
    'american',
    'french',
    'english',
  ];

  ngOnInit(): void {}
}
