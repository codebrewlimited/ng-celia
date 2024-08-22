/** @format */

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { CbMenuComponent } from './menu.component';

import { CbMenuSectionComponent } from './menu-section.component';

import { CbMenuItemComponent } from './menu-item.component';

// import {
//   CbMenuComponent
// } from './menu.component';

// import {
//   CbMenuButtonComponent,
//   CbMenuButtonIconDirective
// } from './menu-button.component';

// import {
//   CbMenuItemDirective
// } from './menu-item.directive';

// import {
//   CbMenuLinkDirective
// } from './menu-link.directive';

const EXPORTED_MODULES = [
  CbMenuComponent,
  CbMenuSectionComponent,
  CbMenuItemComponent,
  // CbMenuLinkDirective,
  // CbMenuItemDirective,
  // CbMenuButtonComponent,
  // CbMenuButtonIconDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // CbIconModule
  ],
  declarations: EXPORTED_MODULES,
  exports: EXPORTED_MODULES,
})
export class CbMenuModule {}
