import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDateComponent } from './contract-date.component';

const routes: Routes = [{path: '', component: ContractDateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDateRoutingModule { }
