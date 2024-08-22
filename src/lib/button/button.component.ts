/** @format */

/* tslint:disable: component-selector no-inputs-metadata-property no-host-metadata-property*/

import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';

import { CbButtonBase } from './button-base';

import { CbTriggerButton } from './trigger-button';

@Component({
  templateUrl: './button.html',
  // styleUrls: ['./button.scss'],
  selector: 'button[cbButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['classNames:cbButton'],
  providers: [{ provide: CbTriggerButton, useExisting: CbButtonComponent }],
  host: {
    '[class.cb-button]': 'true',
  },
})
export class CbButtonComponent extends CbButtonBase {
  constructor(_cdr: ChangeDetectorRef, elementRef: ElementRef, focusMonitor: FocusMonitor) {
    super(_cdr, elementRef, focusMonitor);
    /** @wow */
  }
}
