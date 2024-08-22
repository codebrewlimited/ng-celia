/** @format */

import { Directive } from '@angular/core';

/* tslint:disable: directive-class-suffix */

/**
 * Interface for any kind of button that should be active while
 * an overlay is open.
 */
@Directive()
export abstract class CbTriggerButton {
  /** Applies active styles to the button. */
  abstract setTriggerActive(): void;
  /** Applies or unsets inactive styles to the button. */
  abstract setTriggerInactive(): void;
}
