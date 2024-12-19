import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';  // Import the RoutingModule
import { RouterModule } from '@angular/router';  // Import RouterModule

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  // Ensure RouterModule is imported here
    RoutingModule  // If using a separate routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
