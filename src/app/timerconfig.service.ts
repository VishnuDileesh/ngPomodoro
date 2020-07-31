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

  upDateConfig(focusTime, shortBreakTime, longBreakTime): void {
    focusTime === undefined
      ? (this.focusTime = 25)
      : (this.focusTime = focusTime);

    shortBreakTime === undefined
      ? (this.shortBreakTime = 5)
      : (this.shortBreakTime = shortBreakTime);

    longBreakTime === undefined
      ? (this.longBreakTime = 15)
      : (this.longBreakTime = longBreakTime);
  }
}
