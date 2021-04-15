import { Component, OnInit } from '@angular/core';

import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
