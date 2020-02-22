import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireBaseAuthService } from './auth.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FireBaseAuthService
  ]
})
export class CoreModule {
  /** Adding a guard so this module won't be imported multiple times **/
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    } }
}
