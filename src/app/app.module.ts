import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LaptopCardComponent } from './laptop-card/laptop-card.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';

@NgModule({
  declarations: [       //NgModule components
    AppComponent,
    MainComponent,
    NavigationBarComponent,
    LaptopsComponent,
    LaptopCardComponent,
    LaptopDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule        //feature module
  ],
  providers: [],
  bootstrap: [AppComponent] //Bootstrap component (first component to open)
})
export class AppModule { }
