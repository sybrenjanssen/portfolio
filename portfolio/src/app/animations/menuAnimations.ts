import { trigger, animate, transition, style, query, animateChild, stagger } from '@angular/animations';

// Used to set queries as optional
const optional = { optional: true };

export const menuBaseAnimation =

    trigger('ngIfAnimation', [
        transition(':enter, :leave', [
            query('@*', animateChild(), {
                optional: true
            })
        ])
    ]);

export const menuEaseAnimation =
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
    ]);

export const menuFirstItemAnimation =
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
    ]);

export const menuSecondItemAnimation =
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
    ]);

export const menuThirdItemAnimation =
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
      ]);

export const menuFooterAnimation =
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
    ]);
