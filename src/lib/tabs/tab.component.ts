/** @format */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-tab',
  template: `<div [hidden]="!active"><ng-content></ng-content></div>`,
})
export default class CbTabComponent {
  @Input() tabTitle: string;
  @Input() active = false;
}
