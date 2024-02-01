import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TTags } from '../filters/filters.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() options: Array<TTags> = [];

  @Output() ChangedTag = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit(): void {}

  changeTag(value: string | number) {
    this.ChangedTag.emit(value);
  }
}
