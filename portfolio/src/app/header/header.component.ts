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
          }), animate('500ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 1,
              transform: 'scale(1)'
          }))
      ]),
      transition('* => void', [
          style({
              opacity: 1,
              transform: 'scale(1)'
          }),
          animate('500ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 0,
              transform: 'scale(0.5)'
          }))
        ])
      ]),
      trigger('firstMenuItem', [
        transition('void => *', [
          style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }), animate('550ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 1,
              transform: 'translateY(0)'
          }))
        ]),
        transition('* => void', [
          style({
              opacity: 1,
              transform: 'translateY(0)'
          }), animate('350ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }))
        ])
      ]),
      trigger('secondMenuItem', [
        transition('void => *', [
          style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }), animate('650ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 1,
              transform: 'translateY(0)'
          }))
        ]),
        transition('* => void', [
          style({
              opacity: 1,
              transform: 'translateY(0)'
          }), animate('250ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }))
        ])
      ]),
      trigger('thirdMenuItem', [
        transition('void => *', [
          style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }), animate('750ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 1,
              transform: 'translateY(0)'
          }))
        ]),
        transition('* => void', [
          style({
              opacity: 1,
              transform: 'translateY(0)'
          }), animate('150ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }))
        ])
      ]),
      trigger('footer', [
        transition('void => *', [
          style({
              opacity: 0,
              transform: 'translateY(300px)'
          }), animate('600ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 1,
              transform: 'translateY(0)'
          }))
        ]),
        transition('* => void', [
          style({
              opacity: 1,
              transform: 'translateY(0)'
          }), animate('600ms cubic-bezier(.36,0,.63,1)', style({
              opacity: 0,
              transform: 'translateY(800px)'
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
