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
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
