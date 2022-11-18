import { LoadingService } from './loading/loading.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription  } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;
  subscription!: Subscription;
  constructor(private loadingService:LoadingService){}

  title = 'the-f2e-fourth-week2';
  loadMode = 'none';
  // isLoading = false;
  ngOnInit(): void {
    this.subscription = this.loadingService.getIsLoading().subscribe(val => {
      this.isLoading = val;
      this.loadMode =this.isLoading ? 'inline' : 'none';

    })

  }
}
