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

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void { }

  alertConfirm() {
    confirm('test confirm windows');
  }

  openDialog(desc: string): void {
    this.matDialog.open(CustomDialogComponent, {
      data: {
        title: '審核結果說明',
        note: desc,
        isDisplayOnly: true,
        inputDesc: ''
      },
      minWidth: "40vw",
      maxWidth: "90vw",
      width: "30rem"
    })
  };


}
