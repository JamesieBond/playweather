import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitysearchComponent } from './citysearch/citysearch.component';
import { WeekviewComponent } from './weekview/weekview.component';
import { DayviewComponent } from './dayview/dayview.component';
import { WeatherService } from './weather.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'searchView',
    pathMatch: 'full'
  },
  { path: 'searchView', component: CitysearchComponent },
  { path: 'weeklyView', component: WeekviewComponent },
  { path: 'dayView', component: DayviewComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    WeekviewComponent,
    DayviewComponent,
    CitysearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
