import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  constructor() {}

  title = 'Filters';

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
