import { Component, Input } from '@angular/core';
import { Laptop } from '../models/laptop';
import { LaptopService } from '../laptop.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-laptop-card',
  templateUrl: './laptop-card.component.html',
  styleUrls: ['./laptop-card.component.css']
})
export class LaptopCardComponent {
  @Input() laptop!: Laptop;

  constructor(
    private laptopService : LaptopService,
    private location: Location
    ) { }

  delLaptop(): void {
    this.laptopService.delLaptop(this.laptop.id);
    location.reload();
  }
}
