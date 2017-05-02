import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})

export class DistributorsComponent implements OnInit {
  ngOnInit(){
    console.log("distributors");
  }
}
