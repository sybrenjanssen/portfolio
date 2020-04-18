import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, query, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('easeInOut', [
      transition('void => *', [
          style({
              opacity: 0,
              transform: 'scale(0.5)'
          }), animate('300ms ease-in', style({
              opacity: 1,
              transform: 'scale(1)'
          }))
      ]),
      transition('* => void', [
          style({
              opacity: 1,
              transform: 'scale(1)'
          }),
          animate('300ms ease-in', style({
              opacity: 0,
              transform: 'scale(0.5)'
          }))
        ])
      ])
  ]
})
export class HeaderComponent implements OnInit {
  toggled = false;

  ngOnInit() {
  }

  toggleMenu() {
    this.toggled = !this.toggled;
 

  }
}
