import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './nav/nav.component';
import * as $ from 'jquery';
import { UxdesignComponent } from './components/portfolio/uxdesign/uxdesign.component';
import { DevelopmentComponent } from './components/portfolio/development/development.component';
import { DesignComponent } from './components/portfolio/design/design.component';
import { IllustrationComponent } from './components/portfolio/illustration/illustration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    NavComponent,
    UxdesignComponent,
    DevelopmentComponent,
    DesignComponent,
    IllustrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
