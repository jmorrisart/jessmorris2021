import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-uxdesign',
  templateUrl: './uxdesign.component.html',
  styleUrls: ['./uxdesign.component.scss']
})
export class UxdesignComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;

  constructor() { }

  ngOnInit(): void {}

}
