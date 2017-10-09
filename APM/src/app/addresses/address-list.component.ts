import {Component, OnInit} from '@angular/core';
import {IAddress} from './address';
import { AddressService } from './address.service';

@Component({
templateUrl: './address-list.component.html',
styleUrls: ['./address-list.component.css']
})

export class AddressListComponent implements OnInit {
  pageTitle: string = 'Address List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredAddresses = this.listFilter ? this.performFilter(this.listFilter) : this.addresses;
  }

  filteredAddresses: IAddress[];
  addresses: IAddress[] = [  ];


constructor(private _addressService: AddressService) {
  // this.filteredAddresss = this.addresss;
  // this.listFilter = 'Cart';
}


  performFilter(filterBy: string): IAddress[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.addresses.filter((address: IAddress) =>
          address.streetName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._addressService.getAddresses()
            .subscribe(addresses => {
                this.addresses = addresses;
                this.filteredAddresses = this.addresses;
            },
                error => this.errorMessage = <any>error);
}

  onRatingClicked(message: string): void {
    this.pageTitle = 'Address List: ' + message;
}

}
