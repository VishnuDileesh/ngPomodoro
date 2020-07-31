import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FocusComponent } from './pages/focus/focus.component';
import { ShortBreakComponent } from './pages/short-break/short-break.component';
import { LongBreakComponent } from './pages/long-break/long-break.component';
import { SettingComponent } from './pages/setting/setting.component';

import { TimerconfigService } from './timerconfig.service';

// function countdownConfigFactory(): CountdownGlobalConfig {
//   return { format: `mm:ss`, demand: true };
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FocusComponent,
    ShortBreakComponent,
    LongBreakComponent,
    SettingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CountdownModule, FormsModule],
  providers: [
    // { provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
    TimerconfigService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
