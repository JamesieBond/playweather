/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [WeatherService]
    });
  });

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
