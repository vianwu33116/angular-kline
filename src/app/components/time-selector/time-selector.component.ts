import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})

export class TimeSelectorComponent {
  @Output() selectedIntervalChanged: EventEmitter<string> = new EventEmitter<string>();

  timeOptions: string[] = ['4h', '1d', '3d', '1w'];
  selectedInterval: string = '4h';

  setSelectedInterval(interval: string): void {
    this.selectedInterval = interval;
    this.selectedIntervalChanged.emit(this.selectedInterval);
  }
}
