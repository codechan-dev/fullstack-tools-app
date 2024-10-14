import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { Subscribe } from 'rxjs';

@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tool-list.component.html',
})
export class ToolListComponent implements OnInit {
  tools: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/tools')  // Makes a GET request to the backend
      .subscribe(data => {
        console.log(data);  // Log the data to the console
        this.tools = data;  // Assign the fetched data to the tools array
      });
  }
  

}
