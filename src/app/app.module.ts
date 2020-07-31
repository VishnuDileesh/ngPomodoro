import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FocusComponent } from './pages/focus/focus.component';
import { ShortBreakComponent } from './pages/short-break/short-break.component';
import { LongBreakComponent } from './pages/long-break/long-break.component';
import { SettingComponent } from './pages/setting/setting.component';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
