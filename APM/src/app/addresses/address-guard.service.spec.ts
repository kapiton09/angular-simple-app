import { TestBed, inject } from '@angular/core/testing';

import { AddressGuardService } from './address-guard.service';

describe('AddressGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressGuardService]
    });
  });

  it('should be created', inject([AddressGuardService], (service: AddressGuardService) => {
    expect(service).toBeTruthy();
  }));
});
