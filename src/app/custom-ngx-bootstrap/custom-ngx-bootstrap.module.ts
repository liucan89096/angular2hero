import { NgModule } from '@angular/core';

import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    AlertModule,
    BsDropdownModule
  ]
})
export class CustomNgxBootstrapModule { }
