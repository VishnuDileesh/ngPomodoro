import { Component, OnInit } from '@angular/core';
import { TimerconfigService } from 'src/app/timerconfig.service';

@Component({
  selector: 'app-long-break',
  templateUrl: './long-break.component.html',
  styleUrls: ['./long-break.component.css'],
})
export class LongBreakComponent implements OnInit {
  time;
  timeConfig: any;

  constructor(private timerConfigService: TimerconfigService) {}

  ngOnInit(): void {
    this.time = this.timerConfigService.getLongBreakTime();
    this.timeConfig = {
      leftTime: this.time * 60,
      format: `mm:ss`,
      demand: true,
    };
  }
}
