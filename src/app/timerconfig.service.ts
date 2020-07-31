import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerconfigService {
  focusTime = 25;
  shortBreakTime = 5;
  longBreakTime = 15;

  constructor() {}

  getFocusTime(): number {
    return this.focusTime;
  }

  getShortBreakTime(): number {
    return this.shortBreakTime;
  }

  getLongBreakTime(): number {
    return this.longBreakTime;
  }
}
