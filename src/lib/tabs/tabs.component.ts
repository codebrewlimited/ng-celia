/** @format */

import { Component, ContentChildren, QueryList, AfterContentInit, Attribute } from '@angular/core';

import CbTabComponent from './tab.component';

@Component({
  selector: 'cb-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export default class CbTabsComponent implements AfterContentInit {
  @ContentChildren(CbTabComponent) tabs: QueryList<CbTabComponent>;

  constructor(@Attribute('justify') public justify: 'left' | 'center' | 'right' = 'left') {
    console.log(this.justify);
  }

  public ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: CbTabComponent): void {
    if (tab) {
      setTimeout(() => {
        this.tabs.toArray().forEach((t: CbTabComponent) => (t.active = false));
        tab.active = true;
      });
    }
  }

  public init(tab: CbTabComponent): void {}
}
