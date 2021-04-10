import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public innerWidth: any;
  public menuDivWidth: any;
  public menuMarginLeft: any;

  constructor() { }

  setMobileMenuStyling() {
    // Set dynamic margins for the mobile menu option
    this.innerWidth = window.innerWidth;
    this.menuDivWidth = $('.mobile-menu-container').width();
    this.menuMarginLeft = (this.innerWidth - this.menuDivWidth) / 2 ;
    $('.mobile-menu-container').css({
      marginLeft: this.menuMarginLeft
    });
  }

  responsiveMobileMenuStyling() {
    this.innerWidth = window.innerWidth;
    this.menuMarginLeft = (this.innerWidth - this.menuDivWidth) / 2 ;
    $('.mobile-menu-container').css({
      marginLeft: this.menuMarginLeft
    });
  }

}
