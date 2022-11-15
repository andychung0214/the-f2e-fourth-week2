import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingMbComponent } from './loading-mb/loading-mb.component';
import { HandWritingComponent } from './hand-writing/hand-writing.component';
import { PhotoComponent } from './photo/photo.component';
import { ContractComponent } from './contract/contract.component';
import { SaveComponent } from './save/save.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HomeComponent,
    ErrorComponent,
    SuccessComponent,
    LoadingComponent,
    LoadingMbComponent,
    HandWritingComponent,
    PhotoComponent,
    ContractComponent,
    SaveComponent,
    RecordListComponent,
    RecordDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
