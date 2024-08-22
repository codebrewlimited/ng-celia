/** @format */

/* tslint:disable: component-selector variable-name no-inputs-metadata-property no-host-metadata-property*/

import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  HostBinding,
  Input,
} from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';

import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'button[nxPlainButton]',
  templateUrl: './plain-button.component.html',
  styleUrls: ['plain-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['classNames:nxPlainButton'],
  host: {
    '[class.cb-plain-button]': 'true',
    '[class.cb-plain-button--danger]': 'danger',
  },
})
export class CbPlainButtonComponent implements OnDestroy {
  static ngAcceptInputType_disabled: BooleanInput;

  /** @docs-private */
  @HostBinding('attr.disabled') get isDisabled(): boolean | null {
    return this.disabled || null;
  }
  /** @docs-private */
  @HostBinding('attr.aria-disabled') get isAriaDisabled(): string {
    return this.disabled.toString();
  }

  private _disabled = false;

  @Input()
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  private _classNames = '';

  danger = false;

  public set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;
    this.danger = /danger/.test(this._classNames);
    this._changeDetectorRef.markForCheck();
  }

  public get classNames(): string {
    return this._classNames;
  }

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _focusMonitor: FocusMonitor
  ) {
    this._focusMonitor.monitor(this._elementRef);
  }

  public ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
}
