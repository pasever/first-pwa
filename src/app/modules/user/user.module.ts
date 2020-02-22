import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserContainerComponent } from './user-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserContainerComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
