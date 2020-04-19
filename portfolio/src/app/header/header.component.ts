import { Component, OnInit } from '@angular/core';
import {
  menuBaseAnimation,
  menuEaseAnimation,
  menuFirstItemAnimation,
  menuSecondItemAnimation,
  menuThirdItemAnimation,
  menuFooterAnimation } from '../animations/menuAnimations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    menuBaseAnimation,
    menuEaseAnimation,
    menuFirstItemAnimation,
    menuSecondItemAnimation,
    menuThirdItemAnimation,
    menuFooterAnimation]
})
export class HeaderComponent implements OnInit {
  toggled = false;

  ngOnInit() {
  }

  toggleMenu() {
    this.toggled = !this.toggled;
  }
}
// body > *:not(#loading)
