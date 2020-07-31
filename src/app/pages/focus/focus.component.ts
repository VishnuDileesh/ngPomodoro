import { Component, OnInit } from '@angular/core';
import { TimerconfigService } from 'src/app/timerconfig.service';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css'],
})
export class FocusComponent implements OnInit {
  time;
  timeConfig: any;

  constructor(private timeConfigService: TimerconfigService) {}

  ngOnInit(): void {
    this.time = this.timeConfigService.getFocusTime();
    this.timeConfig = {
      leftTime: this.time * 60,
      format: `mm:ss`,
      demand: true,
    };
  }
}
