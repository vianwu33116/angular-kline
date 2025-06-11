import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['../../app.component.css', './time-selector.component.css']
})

export class TimeSelectorComponent {
  @Output() selectedIntervalChanged: EventEmitter<string> = new EventEmitter<string>();

  timeOptions: string[] = ['4h', '1d', '3d', '1w'];
  selectedInterval: string = '4h';

  setSelectedInterval(interval: string): void {
    this.selectedInterval = interval;
    this.selectedIntervalChanged.emit(this.selectedInterval);
    // 在這裡可以觸發其他操作，例如通知父組件或服務
  }
}
