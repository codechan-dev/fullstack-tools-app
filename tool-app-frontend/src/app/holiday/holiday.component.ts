import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  imports:[FormsModule],
  standalone:true,
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  holidayName: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('HolidayComponent loaded');
  }

}
