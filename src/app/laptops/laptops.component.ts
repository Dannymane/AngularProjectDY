import { Component, OnInit } from '@angular/core';
import { Laptop } from '../models/laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  laptops: Laptop[] = [];

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void { //called after the constructor and called  after the first ngOnChanges()
    this.getLaptops();
  }

  //async
  getLaptops(): void {
    this.laptopService.getLaptops().subscribe(laptops => this.laptops = laptops);
  }

}
