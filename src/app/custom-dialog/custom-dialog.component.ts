import { DialogData } from './../models/dialog-data.model';
import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  // data: string | undefined;
  // form : FormGroup | undefined;

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
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // console.log(data);
    localStorage.setItem('account-login', '12345678');
  //   this.form = this.formBuilder.group({
  //     note: [''],
  //     title: [''],
  //     inputDesc: [''],
  //     isDisplayOnly: [''],
  //     updateItem: ['']

  // })
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


    //Temp Canvas

  @ViewChild('canvas') public canvas: ElementRef | undefined;


  private ctx: CanvasRenderingContext2D | null | undefined;

  // 確認滑鼠 / 手指是否按下
  isPainting = false;





  //  public ngAfterViewInit(): void {
  //   const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
  //   debugger
  //   this.ctx = canvasEl.getContext('2d');

  //   if (!this.ctx) throw 'Cannot get context';

  //   // 下2行設定線條的相關數值
  //   this.ctx.lineWidth = 4;
  //   this.ctx.lineCap = "round";

  //   // event listener 電腦板
  //   // canvas.addEventListener("mousedown", this.startPosition);
  //   // canvas.addEventListener("mouseup", this.finishedPosition);
  //   // canvas.addEventListener("mouseleave", this.finishedPosition);
  //   // canvas.addEventListener("mousemove", this.draw);

  //   // // event listener 手機板
  //   // canvas.addEventListener("touchstart", this.startPosition);
  //   // canvas.addEventListener("touchend", this.finishedPosition);
  //   // canvas.addEventListener("touchcancel", this.finishedPosition);
  //   // canvas.addEventListener("touchmove", this.draw);

  //   // // 重設按鈕
  //   // clearBtn.addEventListener("click", this.reset);
  //   // saveBtn.addEventListener("click", this.saveImage);
  // }

  // 取得滑鼠 / 手指在畫布上的位置
  getPaintPosition(e) {
    // const canvasSize = canvas.getBoundingClientRect();

    // if (e.type === "mousemove") {
    //   return {
    //     x: e.clientX - canvasSize.left,
    //     y: e.clientY - canvasSize.top,
    //   };
    // } else {
    //   return {
    //     x: e.touches[0].clientX - canvasSize.left,
    //     y: e.touches[0].clientY - canvasSize.top,
    //   };
    // }
  }

  // 開始繪圖時，將狀態開啟
  startPosition(e) {
    e.preventDefault();
    this.isPainting = true;
  }

  // 結束繪圖時，將狀態關閉，並產生新路徑
  finishedPosition() {
    this.isPainting = false;
    this.ctx.beginPath();
  }

  // 繪圖過程
  // draw(e) {
  //   e.preventDefault();
  //   if (!this.isPainting) return;

  //   // 取得滑鼠 / 手指位置
  //   const paintPosition = this.getPaintPosition(e);

  //   // 移動到滑鼠位置並產生圖案
  //   this.ctx.lineTo(paintPosition.x, paintPosition.y);
  //   this.ctx.stroke();
  // }

  // 重新設定畫布
  reset() {
    // this.ctx.clearRect(0, 0, this.canvas.width, canvas.height);
  }

  // 儲存圖片
  saveImage() {
    // const newImg = this.canvas.toDataURL("image/png");
    // showImage.src = newImg;
    // localStorage.setItem("img", newImg);
  }
}
