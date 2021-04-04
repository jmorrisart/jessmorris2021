import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jessmorris2021';

  public titleArr: Array<any> = [
    { page: '/', title: 'Jess Morris'},
    { page: '/about', title: 'About'},
    { page: '/portfolio', title: 'Portfolio'},
    { page: '/blog', title: 'Blog'},
    { page: '/contact', title: 'Contact'}
  ]

  constructor( private router: Router, private activatedRoute: ActivatedRoute ) {}
}
