import { Component, Input } from '@angular/core';
import { Laptop } from '../models/laptop';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LaptopService } from '../laptop.service';
@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent {
  @Input() laptop?: Laptop;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLaptop();
  }
  
  getLaptop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptopService.getLaptop(id).subscribe(laptop => this.laptop = laptop);
  }

  putLaptop(): void {
    if (this.laptop){
      this.laptopService.putLaptop(this.laptop);
    }

      // .subscribe(updatedLaptop => {
      //   console.log('Laptop updated successfully:', updatedLaptop);
      //   // Handle the successful update, e.g., display a success message
      // }, error => {
      //   console.error('Error updating laptop:', error);
      //   // Handle the error, e.g., display an error message
      // });
  }

  goBack(): void {
    this.location.back();
  }

}
