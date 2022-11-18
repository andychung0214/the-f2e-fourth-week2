import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  animationItem!: AnimationItem;
  options: AnimationOptions = {
    path: `${environment.loadingUrl}`,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {

  }

}
