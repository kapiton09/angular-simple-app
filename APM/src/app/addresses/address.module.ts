import { NgModule } from '@angular/core';
import { AddressListComponent } from './address-list.component';
import { AddressDetailComponent } from './address-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { AddressGuardService } from './address-guard.service';
import { AddressService } from './address.service';
import { SharedModule } from './../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'addresses', component: AddressListComponent },
        { path: 'addresses/:id',
          canActivate: [ AddressGuardService ],
          component: AddressDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    AddressListComponent,
    AddressDetailComponent,
  ],
  providers: [
    AddressService,
    AddressGuardService
  ]
})
export class AddressModule { }
