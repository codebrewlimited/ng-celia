/** @format */

import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import CbTabsComponent from './tabs.component';

import CbTabComponent from './tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CbTabsComponent, CbTabComponent],
  exports: [CbTabsComponent, CbTabComponent],
})
export class CbTabsModule {}
