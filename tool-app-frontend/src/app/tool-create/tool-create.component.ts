import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-create',
  imports:[FormsModule,CommonModule],
  standalone:true,
  templateUrl: './tool-create.component.html',
})
export class ToolCreateComponent {
  tool = { name: '', description: '' };

  constructor(private http: HttpClient, private router: Router) {}

  createTool() {
    this.http.post('http://localhost:3000/tools', this.tool)
      .subscribe(() => this.router.navigate(['/']));
  }
  ngOnInit(): void {
    console.log('HolidayComponent loaded');
  }
  
}
