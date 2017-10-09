import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAddress } from './address';
import { AddressService } from './address.service';

@Component({
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  pageTitle: string = 'Address Detail';
  errorMessage: string;
  address: IAddress;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _addressService: AddressService) {
  }
  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getAddress(id);
  }

  getAddress(id: number) {
    this._addressService.getAddress(id).subscribe(
      address => this.address = address,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/addresses']);
  }

}
