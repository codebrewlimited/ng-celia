/** @format */

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

/**
  This components is a collapsible menu for usage on smaller devices.
  Can contain any content, but usually [nxMenuLink], [nxMenuGroup] and [nxAction].
*/
@Component({
  selector: 'cb-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-expanded]': 'open',
  },
})
export class CbMenuComponent implements OnInit {
  ngOnInit(): void {
    console.info(this.secondary);
  }
  private _open = false;

  @Input() public primary: CbMenuItem[];
  @Input() public secondary?: any[]; // CbMenuNavItem[];
  @Output() public actionEvent?: EventEmitter<string> = new EventEmitter<string>();
  /** Whether the menu is open or closed. */
  // @Input()
  // set open(value: BooleanInput) {
  //     const open = coerceBooleanProperty(value);
  //     if (open !== this._open) {
  //         this._open = open;
  //         this._cdr.markForCheck();
  //     }
  // }

  // get open(): boolean {
  //     return this._open;
  // }

  // /* Toggles the open state of the menu. */
  // toggle() {
  //     this.open = !this.open;
  // }

  public info(): void {}

  public eventHandler(key: string): void {
    this.actionEvent.emit(key);
  }

  public logout(): void {}

  constructor(private _cdr: ChangeDetectorRef) {}
}

export interface CbMenuItem {
  key: string;
  icon: string;
}
export interface CbMenuNavItem {
  link: string;
}
