import { InfoService } from './../services/info.service';
import { LoadingService } from './../loading/loading.service';
import { CustomDialogService } from './../services/custom-dialog.service';
import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { CustomDialogComponent } from './../custom-dialog/custom-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @Input() customAfterViewInit;
  @Output() isLoading = new EventEmitter<any>();

  desc = '';
  percentDone = 1;
  uploadSuccess = false;
  fileName = '';
  fileData = '';



  constructor(public matDialog: MatDialog,
              private customDialogService: CustomDialogService,
              private loadingService: LoadingService,
              private router: Router,
              private infoService: InfoService) { }

  ngOnInit(): void {
    this.isLoading.emit(true);

  }

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

  readBlob(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(blob);
    });
  }

  public onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      console.log('event.target.files[0]=', event.target.files[0]);


      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      // localStorage.setItem(this.fileName, this.readBlob(event.target.files[0]));

      reader.readAsDataURL(file);
      // debugger

      // localStorage.removeItem('pdfFile');
      // localStorage.setItem('pdfFile', JSON.stringify(file));

      // localStorage.removeItem('pdfFileName');
      // localStorage.setItem('pdfFileName', this.fileName );

      reader.onload = () => {
        localStorage.removeItem('pdfFile');
        localStorage.setItem('pdfFile', reader.result as string);
        this.loadingService.setIsLoading(false);
        this.router.navigateByUrl("/hand-writing");

      };
    }
  }
  onClick() {
    const fileData = localStorage.getItem(this.fileName);
    // setTimeout(function() {
    //   //FireFox seems to require a setTimeout for this to work.
    //   document.body.appendChild(
    //     document.createElement("iframe")
    //   ).src = fileData;
    // }, 0);
  }

}
