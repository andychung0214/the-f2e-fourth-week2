import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RecordListComponent } from './record-list/record-list.component';
import { SaveComponent } from './save/save.component';
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
    redirectTo: 'contract/home'
  },
  {
    path: 'contract',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./contract/contract-home/contract-home.module').then(m => m.ContractHomeModule)
      },
      {
        path: 'check',
        loadChildren: () => import('./contract/contract-check/contract-check.module').then(m => m.ContractCheckModule)
      },
      {
        path: 'text',
        loadChildren: () => import('./contract/contract-text/contract-text.module').then(m => m.ContractTextModule)
      },
      {
        path: 'date',
        loadChildren: () => import('./contract/contract-date/contract-date.module').then(m => m.ContractDateModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('./contract/contract-signin/contract-signin.module').then(m => m.ContractSigninModule)
      },
    ]
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
    path: 'custom-dialog',
    component: CustomDialogComponent
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
