/** @format */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cb-menu-item',
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.scss'],
})
export class CbMenuItemComponent implements OnInit {
  @Input() item: any;

  public isOpen = false as boolean;

  constructor() {}

  ngOnInit() {}
}
