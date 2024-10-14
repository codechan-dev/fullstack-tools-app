import { NgModule } from '@angular/core';
import { HolidayComponent } from './holiday/holiday.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'holiday', component: HolidayComponent },
  // { path: '', redirectTo: '/holiday', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
