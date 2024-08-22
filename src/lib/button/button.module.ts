/** @format */

import { NgModule } from '@angular/core';
// import { NxAnchorButtonComponent } from './anchor-button.component';
// import { NxAnchorIconButtonComponent } from './anchor-icon-button.component';
// import { NxAnchorPlainButtonComponent } from './anchor-plain-button.component';
import { CbButtonComponent } from './button.component';
// import { NxIconButtonComponent } from './icon-button.component';
import { CbPlainButtonComponent } from './plain-button.component';

@NgModule({
  declarations: [
    CbButtonComponent,
    // NxIconButtonComponent,
    CbPlainButtonComponent,
    // NxAnchorButtonComponent,
    // NxAnchorIconButtonComponent,
    // NxAnchorPlainButtonComponent,
  ],
  exports: [
    CbButtonComponent,
    // NxIconButtonComponent,
    CbPlainButtonComponent,
    // NxAnchorButtonComponent,
    // NxAnchorIconButtonComponent,
    // NxAnchorPlainButtonComponent,
  ],
})
export class CbButtonModule {}
