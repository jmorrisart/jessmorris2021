import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private appService: AppService ) { }

  ngOnInit(): void {
    this.appService.setMobileMenuStyling();
  }

}
