import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jessmorris2021';
  faBars = faBars;
  public innerWidth: any;
  public menuDivWidth: any;
  public menuMarginLeft: any;
  public route: any;

  // Handle the centering of the mobile menu option when user resizes screen
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.appService.responsiveMobileMenuStyling();
    }

  constructor( public router: Router, private activatedRoute: ActivatedRoute, private appService: AppService ) {}

  ngOnInit(): void {}
}
