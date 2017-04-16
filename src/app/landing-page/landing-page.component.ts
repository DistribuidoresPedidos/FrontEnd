import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public navIsTransparent = true;

  ngOnInit() {
  }

  activate() {
    this.navIsTransparent = true;
  }

  deactivate() {
    this.navIsTransparent = false;
  }

}
