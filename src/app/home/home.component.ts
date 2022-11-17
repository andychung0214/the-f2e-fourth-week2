import { CustomDialogService } from './../services/custom-dialog.service';
import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { CustomDialogComponent } from './../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Input() customAfterViewInit;
  desc: string | undefined;

  constructor(public matDialog: MatDialog,
              private customDialogService: CustomDialogService) { }

  ngOnInit(): void { }

  alertConfirm() {
    confirm('test confirm windows');
  }

  openDialog(desc: string){
    this.customDialogService.openDialog(desc);
  }

  // public openDialog(desc?: any): void {
  //   this.matDialog.open(CustomDialogComponent, {
  //     data: {
  //       title: '審核結果說明',
  //       note: desc,
  //       isDisplayOnly: true,
  //       inputDesc: '',
  //       content: desc
  //     },
  //     width:'800px'
  //     // minWidth: "8vw",
  //     // maxWidth: "16vw",
  //     // width: "8rem"

  //   })
  // }


}
