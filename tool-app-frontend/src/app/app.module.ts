import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component'; // Adjust import as necessary
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HolidayComponent } from './holiday/holiday.component';
import { RouterModule } from '@angular/router';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolCreateComponent } from './tool-create/tool-create.component';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    ReactiveFormsModule ,
    HolidayComponent,
    ToolListComponent,
    ToolCreateComponent,

    // Add other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    // Add other modules here (e.g., AppRoutingModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
