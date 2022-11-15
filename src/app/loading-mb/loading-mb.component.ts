import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-mb',
  templateUrl: './loading-mb.component.html',
  styleUrls: ['./loading-mb.component.scss']
})
export class LoadingMbComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/json/GNsign_loading.json',
  };


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
