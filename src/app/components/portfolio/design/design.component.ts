import { Component, OnInit } from '@angular/core';

import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
