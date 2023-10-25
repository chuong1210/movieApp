/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieAppService } from './movieApp.service';

describe('Service: MovieApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieAppService]
    });
  });

  it('should ...', inject([MovieAppService], (service: MovieAppService) => {
    expect(service).toBeTruthy();
  }));
});
