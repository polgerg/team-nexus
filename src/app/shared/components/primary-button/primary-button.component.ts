import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {
  @Input() buttonLabel: string = '';
  @Input() type: string = 'button';
  @Output() buttonClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.buttonClick.emit();
  }
}
