import { Component, OnInit } from '@angular/core';
import { TimerconfigService } from 'src/app/timerconfig.service';

@Component({
  selector: 'app-short-break',
  templateUrl: './short-break.component.html',
  styleUrls: ['./short-break.component.css'],
})
export class ShortBreakComponent implements OnInit {
  time;
  timeConfig: any;

  constructor(private timerConfigService: TimerconfigService) {}

  ngOnInit(): void {
    this.time = this.timerConfigService.getShortBreakTime();
    this.timeConfig = {
      leftTime: this.time * 60,
    };
  }
}
