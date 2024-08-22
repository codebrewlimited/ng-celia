/** @format */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cb-menu-section',
  templateUrl: './menu-section.html',
  styleUrls: ['./menu-section.scss'],
})
export class CbMenuSectionComponent implements OnInit {
  @Input() public section: any;

  constructor() {}

  ngOnInit(): void {}
}
