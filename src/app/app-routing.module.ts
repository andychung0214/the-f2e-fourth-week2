import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RecordListComponent } from './record-list/record-list.component';
import { SaveComponent } from './save/save.component';
import { ContractComponent } from './contract/contract.component';
import { PhotoComponent } from './photo/photo.component';
import { HandWritingComponent } from './hand-writing/hand-writing.component';
import { LoadingMbComponent } from './loading-mb/loading-mb.component';
import { LoadingComponent } from './loading/loading.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'record',
    component: RecordComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: 'loading-mb',
    component: LoadingMbComponent
  },
  {
    path: 'hand-writing',
    component: HandWritingComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  {
    path: 'contract',
    component: ContractComponent
  },
  {
    path: 'save',
    component: SaveComponent
  },
  {
    path: 'record-list',
    component: RecordListComponent
  },
  {
    path: 'record-detail',
    component: RecordDetailComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
