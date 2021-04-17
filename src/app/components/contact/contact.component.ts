import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private appService: AppService ) { }

  ngOnInit(): void {
    this.appService.setMobileMenuStyling();
  }

}
