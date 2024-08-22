/** @format */

/* tslint:disable: directive-class-suffix component-class-suffix */

import { Component, Type, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CbButtonComponent } from './button.component';

import { CbButtonModule } from './button.module';

// import { NxIconModule } from '@aposin/ng-aquila/icon';

// import { NxIconButtonComponent } from './icon-button.component';

import { CbButtonSize, CbButtonType, CbButtonBase } from './button-base';

@Directive()
abstract class ButtonTest {
  @ViewChild('button') buttonInstance!: CbButtonBase;

  buttonType: CbButtonType = 'primary';
  buttonSize: CbButtonSize = 'medium';
  danger = '';
  negative = '';
  block = '';

  get classNames(): string {
    return `${this.buttonType} ${this.buttonSize} ${this.danger} ${this.negative} ${this.block}`;
  }
}
@Component({
  template: `
    <button nxButton #button class="some-arbitray-class-name">
      Hello Button
    </button>
  `,
})
class BasicButton extends ButtonTest {}

@Component({
  template: `
    <button nxIconButton #button class="some-arbitray-class-name" aria-label="settings">
      <cb-icon name="settings"></cb-icon>
    </button>
  `,
})
class BasicIconButton extends ButtonTest {}

@Component({
  template: ` <button [nxButton]="classNames" #button>Configurable button</button> `,
})
class ConfigurableButton extends ButtonTest {}

@Component({
  template: `
    <button [nxIconButton]="classNames" #button aria-label="settings">
      <cb-icon name="settings"></cb-icon>
    </button>
  `,
})
class ConfigurableIconButton extends ButtonTest {}

@Component({
  template: ` <button [nxButton]="classNames" #button>Configurable button</button> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ConfigurableOnPushButton extends ButtonTest {}

@Component({
  template: `
    <button [nxIconButton]="classNames" #button aria-label="settings">
      <cb-icon name="settings"></cb-icon>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ConfigurableOnPushIconButton extends ButtonTest {}

[
  {
    component: CbButtonComponent,
    basic: BasicButton,
    configurable: ConfigurableButton,
    onPush: ConfigurableOnPushButton,
  },
  {
    component: NxIconButtonComponent,
    basic: BasicIconButton,
    configurable: ConfigurableIconButton,
    onPush: ConfigurableOnPushIconButton,
  },
].forEach((testTarget) => {
  describe(testTarget.component.name, () => {
    let fixture: ComponentFixture<ButtonTest>;
    let testInstance: ButtonTest;
    let buttonInstance: CbButtonComponent;
    let buttonNativeElement: HTMLButtonElement;

    function createTestComponent(component: Type<ButtonTest>) {
      fixture = TestBed.createComponent(component);
      fixture.detectChanges();
      testInstance = fixture.componentInstance;
      buttonInstance = testInstance.buttonInstance;
      buttonNativeElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    }

    function changeAndCheckButtonSize(testSize: CbButtonSize, expectedClass: string): void {
      fixture.componentInstance.buttonSize = testSize;
      fixture.detectChanges();
      expect(buttonInstance.size).toBe(testSize);
      expect(buttonNativeElement.classList).toContain(expectedClass);
    }

    function changeAndCheckButtonType(testType: CbButtonType, expectedClass: string): void {
      fixture.componentInstance.buttonType = testType;
      fixture.detectChanges();
      expect(buttonInstance.type).toBe(testType);
      expect(buttonNativeElement.classList).toContain(expectedClass);
    }

    function changeAndCheckButtonTypeProgrammaticly(testType: CbButtonType, expectedClass: string): void {
      buttonInstance.classNames = testType;
      fixture.detectChanges();
      expect(buttonInstance.type).toBe(testType);
      expect(buttonNativeElement.classList).toContain(expectedClass);
    }

    function changeAndCheckButtonSizeProgrammaticly(testSize: CbButtonSize, expectedClass: string): void {
      buttonInstance.classNames = testSize;
      fixture.detectChanges();
      expect(buttonInstance.size).toBe(testSize);
      expect(buttonNativeElement.classList).toContain(expectedClass);
    }

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [testTarget.basic, testTarget.configurable, testTarget.onPush],
          imports: [NxIconModule, NxButtonModule],
          teardown: { destroyAfterEach: false },
        }).compileComponents();
      })
    );

    describe('basic', () => {
      it(
        'creates the button',
        waitForAsync(() => {
          createTestComponent(testTarget.basic);
          expect(buttonInstance).toBeTruthy();
        })
      );

      it('creates a button with a medium size', () => {
        createTestComponent(testTarget.basic);
        expect(buttonNativeElement.classList).toContain('cb-button--medium');
      });

      it('creates a button with primary style', () => {
        createTestComponent(testTarget.basic);
        expect(buttonInstance.type).toBe('primary');
        expect(buttonNativeElement.classList).toContain('cb-button--primary');
      });

      it('creates a non-danger button', () => {
        createTestComponent(testTarget.basic);
        expect(buttonNativeElement.classList).not.toContain('cb-button--danger');
      });

      it('creates a non-negative button', () => {
        createTestComponent(testTarget.basic);
        expect(buttonNativeElement.classList).not.toContain('cb-button--negative');
      });

      it('creates a non-block button', () => {
        createTestComponent(testTarget.basic);
        expect(buttonNativeElement.classList).not.toContain('cb-button--block');
      });

      it(
        'allow other classes',
        waitForAsync(() => {
          createTestComponent(testTarget.basic);
          expect(buttonNativeElement.classList.contains('some-arbitray-class-name')).toBe(true);
        })
      );
    });

    describe('buttonType', () => {
      it('renders the button with the chosen [buttonType]', () => {
        createTestComponent(testTarget.configurable);
        changeAndCheckButtonType('secondary', 'cb-button--secondary');
        changeAndCheckButtonType('cta', 'cb-button--cta');
        changeAndCheckButtonType('emphasis', 'cb-button--emphasis');
        changeAndCheckButtonType('primary', 'cb-button--primary');
        changeAndCheckButtonType('tertiary', 'cb-button--tertiary');
      });
    });

    describe('buttonSize', () => {
      it('renders the button with the chosen [buttonSize]', () => {
        createTestComponent(testTarget.configurable);
        changeAndCheckButtonSize('small', 'cb-button--small');
        changeAndCheckButtonSize('large', 'cb-button--large');
        changeAndCheckButtonSize('medium', 'cb-button--medium');
        changeAndCheckButtonSize('small-medium', 'cb-button--small-medium');
      });
    });

    describe('danger', () => {
      it('displays a danger button', () => {
        createTestComponent(testTarget.configurable);
        fixture.componentInstance.danger = 'danger';
        fixture.detectChanges();
        expect(buttonInstance.danger).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--danger');

        fixture.componentInstance.danger = '';
        fixture.detectChanges();
        expect(buttonInstance.danger).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--danger');
      });
    });

    describe('negative styling', () => {
      it('displays a negative button', () => {
        createTestComponent(testTarget.configurable);
        fixture.componentInstance.negative = 'negative';
        fixture.detectChanges();
        expect(buttonInstance.negative).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--negative');

        fixture.componentInstance.negative = '';
        fixture.detectChanges();
        expect(buttonInstance.negative).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--negative');
      });
    });

    describe('block layout', () => {
      it('displays the button with block layout', () => {
        createTestComponent(testTarget.configurable);
        fixture.componentInstance.block = 'block';
        fixture.detectChanges();
        expect(buttonInstance.block).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--block');

        fixture.componentInstance.block = '';
        fixture.detectChanges();
        expect(buttonInstance.block).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--block');
      });
    });

    describe('programmatic tests', () => {
      it('renders the button with the chosen [buttonType]', () => {
        createTestComponent(testTarget.onPush);
        changeAndCheckButtonTypeProgrammaticly('primary', 'cb-button--primary');
        changeAndCheckButtonTypeProgrammaticly('secondary', 'cb-button--secondary');
        changeAndCheckButtonTypeProgrammaticly('tertiary', 'cb-button--tertiary');
        changeAndCheckButtonTypeProgrammaticly('cta', 'cb-button--cta');
        changeAndCheckButtonTypeProgrammaticly('emphasis', 'cb-button--emphasis');
      });

      it('renders the button with the chosen [buttonSize]', () => {
        createTestComponent(testTarget.onPush);
        changeAndCheckButtonSizeProgrammaticly('small', 'cb-button--small');
        changeAndCheckButtonSizeProgrammaticly('large', 'cb-button--large');
        changeAndCheckButtonSizeProgrammaticly('medium', 'cb-button--medium');
        changeAndCheckButtonSizeProgrammaticly('small-medium', 'cb-button--small-medium');
      });

      it('updates view on danger change', () => {
        createTestComponent(testTarget.onPush);
        buttonInstance.classNames = 'danger';
        fixture.detectChanges();
        expect(buttonInstance.danger).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--danger');

        buttonInstance.classNames = '';
        fixture.detectChanges();
        expect(buttonInstance.danger).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--danger');
      });

      it('updates view on negative change', () => {
        createTestComponent(testTarget.onPush);
        buttonInstance.classNames = 'negative';
        fixture.detectChanges();
        expect(buttonInstance.negative).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--negative');

        buttonInstance.classNames = '';
        fixture.detectChanges();
        expect(buttonInstance.negative).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--negative');
      });

      it('updates view on block change', () => {
        createTestComponent(testTarget.onPush);
        buttonInstance.classNames = 'block';
        fixture.detectChanges();
        expect(buttonInstance.block).toBe(true);
        expect(buttonNativeElement.classList).toContain('cb-button--block');

        buttonInstance.classNames = '';
        fixture.detectChanges();
        expect(buttonInstance.block).toBe(false);
        expect(buttonNativeElement.classList).not.toContain('cb-button--block');
      });
    });

    describe('a11y', () => {
      it('has no accessibility violations', async () => {
        createTestComponent(testTarget.basic);
        return expectAsync(fixture.nativeElement).toBeAccessible();
      });
    });
  });
});
