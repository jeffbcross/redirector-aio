/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RedirectService } from './redirect.service';

describe('RedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([RedirectService], (service: RedirectService) => {
    expect(service).toBeTruthy();
  }));
});
