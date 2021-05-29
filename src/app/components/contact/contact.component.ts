import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormControl } from '@angular/forms';

import { init } from 'emailjs-com';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: any;
  public email: any;
  public message: any;

  constructor( private appService: AppService ) { }

  ngOnInit(): void {
    this.appService.setMobileMenuStyling();
  }

  processForm() {
    const allInfo = 'My name is ' + this.name + '. My email is ' + this.email + '. My message is ' + this.message;
    this.initEmailJS();
  }

  initEmailJS() {
    init("service_kvgjoyb");
  }

}
