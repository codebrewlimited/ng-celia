/** @format */

import { FocusMonitor } from '@angular/cdk/a11y';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { ElementRef, ChangeDetectorRef, HostBinding, Directive, OnDestroy, Input } from '@angular/core';

/** Type of a button. */
export type CbButtonType = '' | 'primary' | 'secondary' | 'tertiary' | 'cta' | 'emphasis';

/** Size of a button. */
export type CbButtonSize = 'small' | 'small-medium' | 'medium' | 'large';

const DEFAULT_SIZE = 'medium';
const DEFAULT_TYPE = '';

/** @docs-private */
@Directive()
/* tslint:disable: directive-class-suffix */
export class CbButtonBase implements OnDestroy {
  /* tslint:disable: variable-name no-inferrable-types */
  static ngAcceptInputType_disabled: BooleanInput;
  private _classNames: string = '';

  /** @docs-private */
  @HostBinding('class.cb-button--primary') get isPrimary(): boolean {
    return this.type === 'primary';
  }
  /** @docs-private */
  @HostBinding('class.cb-button--secondary') get isSecondary(): boolean {
    return this.type === 'secondary';
  }
  /** @docs-private */
  @HostBinding('class.cb-button--tertiary') get isTertiary(): boolean {
    return this.type === 'tertiary';
  }
  /** @docs-private */
  // @HostBinding('class.cb-button--cta') get isCta(): boolean {
  //   return this.type === 'cta';
  // }
  /** @docs-private */
  // @HostBinding('class.cb-button--emphasis') get isEmphasis(): boolean {
  //   return this.type === 'emphasis';
  // }
  /** @docs-private */
  @HostBinding('class.cb-button--l') get isLarge(): boolean {
    return this.size === 'large';
  }
  /** @docs-private */
  @HostBinding('class.cb-button--m') get isMedium(): boolean {
    return this.size === 'medium';
  }
  /** @docs-private */
  @HostBinding('class.cb-button--sm') get isSmallMedium(): boolean {
    return this.size === 'small-medium';
  }
  /** @docs-private */
  @HostBinding('class.cb-button--s') get isSmall(): boolean {
    return this.size === 'small';
  }

  /** @docs-private */
  @HostBinding('class.cb-button--danger') get isDanger(): boolean {
    return this.danger;
  }
  /** @docs-private */
  @HostBinding('class.cb-button--block') get isBlock(): boolean {
    return this.block;
  }
  /** @docs-private */
  @HostBinding('class.cb-button--negative') get isNegative(): boolean {
    return this.negative;
  }
  /** @docs-private */
  @HostBinding('attr.disabled') get isDisabled(): boolean | null {
    return this.disabled || null;
  }
  /** @docs-private */
  @HostBinding('attr.aria-disabled') get isAriaDisabled(): string {
    return this.disabled.toString();
  }

  /** @docs-private */
  type: CbButtonType = DEFAULT_TYPE;

  /** @docs-private */
  size: CbButtonSize = DEFAULT_SIZE;

  danger: boolean = false;
  negative: boolean = false;
  block: boolean = false;
  @HostBinding('class.cb-button--active')
  active: boolean = false;
  private _disabled: boolean = false;

  @Input()
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() public loading: BooleanInput;

  constructor(private _cdr: ChangeDetectorRef, private _elementRef: ElementRef, private _focusMonitor: FocusMonitor) {
    this._focusMonitor.monitor(this._elementRef);
  }

  public ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  public set classNames(value: string) {
    if (this._classNames === value) {
      return;
    }

    this._classNames = value;

    const [type = null] = this._classNames.match(/primary|secondary|tertiary|cta|emphasis/) || [DEFAULT_TYPE];
    this.type = type as CbButtonType;

    const [size = null] = this._classNames.match(/small-medium|small|medium|large/) || [DEFAULT_SIZE];
    this.size = size as CbButtonSize;

    this.danger = /danger/.test(this._classNames);
    this.negative = /negative/.test(this._classNames);
    this.block = /block/.test(this._classNames);

    this._cdr.markForCheck();
  }

  public get classNames(): string {
    return this._classNames;
  }

  /**
   * @docs-private
   * getter used for the modal component as a quickfix
   * since button got changed from directive to component the reference used by the ngOpenModelOnClick directive
   * for nxButtons is a reference to component instance instead of an element reference. As a workaround we need a
   * way to reach the elementRef of the component until the modal gets refactored.
   */
  get elementRef(): ElementRef<any> {
    return this._elementRef;
  }

  public setTriggerActive(): void {
    this.active = true;
    this._cdr.markForCheck();
  }

  public setTriggerInactive(): void {
    this.active = false;
    this._cdr.markForCheck();
  }
}
