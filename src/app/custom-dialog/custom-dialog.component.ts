import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('account-login', '12345678');
  }

  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  // ) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
