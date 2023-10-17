import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'laptop-details/:id', component: LaptopDetailsComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
