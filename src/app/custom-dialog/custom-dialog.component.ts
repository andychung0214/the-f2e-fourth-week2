import { DialogData } from './../models/dialog-data.model';
import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  form : FormGroup | undefined;

//   get noteControl(): FormControl {
//     return this.form.get('note') as FormControl;
// }

// get inputDescControl(): FormControl {
//     if (this.form !== undefined) {

//     return this.form.get('inputDesc') as FormControl;
//   }
//   return;
// }


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    localStorage.setItem('account-login', '12345678');
    this.form = this.formBuilder.group({
      note: [''],
      title: [''],
      inputDesc: [''],
      isDisplayOnly: [''],
      updateItem: ['']

  })
  }

  closeDialog(): void {
    this.dialogRef.close();
}

submitDialog(): void {
  // if (this.data.updateItem !== undefined) {
  //     this.data.updateItem.approvalDescription = this.form.value.inputDesc;
  //     this.form.value.updateItem = this.data.updateItem;
  //     // console.log('this.data.updateItem=', this.data.updateItem);
  //     // console.log('this.form.value.updateItem=', this.form.value.updateItem);
  // }

  // this.dialogRef.close(this.form.value);
  console.log('submit');

}

  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  // ) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
