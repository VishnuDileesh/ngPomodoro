import { Component, OnInit } from '@angular/core';
import { TimerconfigService } from 'src/app/timerconfig.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  focusTime: 25;
  shortBreakTime: 5;
  longBreakTime: 15;

  constructor(
    private timerConfigService: TimerconfigService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  configUpdate(): void {
    this.timerConfigService.upDateConfig(
      this.focusTime,
      this.shortBreakTime,
      this.longBreakTime
    );

    this.router.navigateByUrl('/');
  }
}
