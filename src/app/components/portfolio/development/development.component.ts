import { Component, OnInit } from '@angular/core';

import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
