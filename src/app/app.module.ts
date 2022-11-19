import { ContractDateComponent } from './contract/contract-date/contract-date.component';
import { ContractTextComponent } from './contract/contract-text/contract-text.component';
import { ContractSigninComponent } from './contract/contract-signin/contract-signin.component';
import { ContractCheckComponent } from './contract/contract-check/contract-check.component';
import { MatDialogModule } from '@angular/material/dialog';
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
import { SaveComponent } from './save/save.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ContractHomeComponent } from './contract/contract-home/contract-home.component';



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
    SaveComponent,
    RecordListComponent,
    RecordDetailComponent,
    CustomDialogComponent,
    CanvasComponent,
    ContractHomeComponent,
    ContractCheckComponent,
    ContractTextComponent,
    ContractDateComponent,
    ContractSigninComponent,
    ContractTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
