import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { DesignComponent } from './components/portfolio/design/design.component';
import { DevelopmentComponent } from './components/portfolio/development/development.component';
import { IllustrationComponent } from './components/portfolio/illustration/illustration.component';
import { UxdesignComponent } from './components/portfolio/uxdesign/uxdesign.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },

  { path: 'portfolio/design', component: DesignComponent },
  { path: 'portfolio/development', component: DevelopmentComponent },
  { path: 'portfolio/illustration', component: IllustrationComponent },
  { path: 'portfolio/uxdesign', component: UxdesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
