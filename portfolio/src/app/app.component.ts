import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { fadeAnimation } from './animations';

// Meta info passed into route parameters
interface PageData {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  defaultTitle = 'Sybren Janssen';
  previousPageData: PageData; // Meta info for previous page, to detect whether user navigated from outside
  pageData: PageData;         // Meta info passed into route definition

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  constructor(
    private router: Router,                       // For page title manipulation
    private activatedRoute: ActivatedRoute,       // For page title manipulation (based on route parameters)
    private titleService: Title,                  // For page title manipulation
    private meta: Meta) {}                        // For dynamic theme color

  ngOnInit() {

    // Set title based on router parameters
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        // tslint:disable-next-line: no-string-literal
        if ( child.snapshot.data['title']) {
          // tslint:disable-next-line: no-string-literal
          const data = {
            // tslint:disable-next-line: no-string-literal
            title: child.snapshot.data['title']
          };
          // tslint:disable-next-line: no-string-literal
          return data;
        } else {
          const data = {
            title: this.defaultTitle
          };

          return data;
        }
      })
    ).subscribe( (data: PageData) => {
      this.previousPageData = this.pageData;
      this.pageData = data;
      this.titleService.setTitle(`${data.title}`);

    });
  }
}

