import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, data: { title: ''}}, // Add title atribute
  {path: 'about', component: AboutComponent, data: { title: 'About | Sybren Janssen'}},
  {path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio | Sybren Janssen'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
