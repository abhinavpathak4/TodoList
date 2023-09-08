import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // standalone: true,
  // imports: [CommonModule]
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    console.log('details component');
  } 
}
