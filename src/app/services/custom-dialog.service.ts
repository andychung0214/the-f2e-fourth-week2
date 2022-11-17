import { CustomDialogComponent } from './../custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {

  constructor(public dialog: MatDialog) { }

  public openDialog(desc?: any): void {
    this.dialog.open(CustomDialogComponent, {
      data: {
        title: '審核結果說明',
        note: desc,
        isDisplayOnly: true,
        inputDesc: '',
        content: desc
      },
      width:'800px'
      // minWidth: "8vw",
      // maxWidth: "16vw",
      // width: "8rem"

    })
  };
}
