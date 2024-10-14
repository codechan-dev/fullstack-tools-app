import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolCreateComponent } from './tool-create/tool-create.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { HolidayComponent } from './holiday/holiday.component';

export const routes: Routes = [
    { path: '', component: ToolListComponent },
    { path: 'create', component: ToolCreateComponent },   
    { path: 'holiday', component: HolidayComponent }, 
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  