import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FocusComponent } from './pages/focus/focus.component';

const routes: Routes = [
  { path: '', redirectTo: '/focus', pathMatch: 'full' },
  { path: 'focus', component: FocusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
