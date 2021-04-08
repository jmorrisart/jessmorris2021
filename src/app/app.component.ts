import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
    }

  constructor( private router: Router, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.menuDivWidth = $('.mobile-menu-container').width();
    this.menuMarginLeft = (this.innerWidth - this.menuDivWidth) / 2 ;

    $('.mobile-menu-container').css({
      marginLeft: this.menuMarginLeft
    });
  }
}
