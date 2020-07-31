import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FocusComponent } from './pages/focus/focus.component';
import { ShortBreakComponent } from './pages/short-break/short-break.component';
import { LongBreakComponent } from './pages/long-break/long-break.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: '/focus', pathMatch: 'full' },
  { path: 'focus', component: FocusComponent },
  { path: 'short-break', component: ShortBreakComponent },
  { path: 'long-break', component: LongBreakComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
