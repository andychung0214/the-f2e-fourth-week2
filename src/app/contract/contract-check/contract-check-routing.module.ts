import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractCheckComponent } from './contract-check.component';

const routes: Routes = [{path: '', component: ContractCheckComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractCheckRoutingModule { }
