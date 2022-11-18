import { Component, OnInit , ElementRef, NgZone, ViewChild, AfterViewInit} from '@angular/core';
import { fabric } from "fabric";
import * as pdfjsLib from "pdfjs-dist";

const Base64Prefix = "data:application/pdf;base64,";
const canvas = new fabric.Canvas("canvas");

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  pdfData: any;
  pdfImage: any;
  inputTempFile = {
    lastModified: 1667788165901,
    name: "20220107035325502.pdf",
    size: 666263,
    type: "application/pdf",
  webkitRelativePath: ""
  }

  constructor() { }

  ngOnInit(): void {
    // 此處 canvas 套用 fabric.js
    this.initRun();
  }

  async initRun(){

    document.querySelector("input")?.addEventListener("change", async (e) => {

      canvas.requestRenderAll();
      const target = e.target as HTMLInputElement;
      debugger
      this.pdfData = await this.printPDF(target.files[0]);
      this.pdfImage = await this.pdfToImage(this.pdfData);

      // 調整canvas大小
      canvas.setWidth(this.pdfImage.width / window.devicePixelRatio);
      canvas.setHeight(this.pdfImage.height / window.devicePixelRatio);
      canvas.setBackgroundImage(this.pdfImage, canvas.renderAll.bind(canvas));
    });


    if (localStorage.getItem("20220107035325502.pdf")) {
      let showPDF = document.getElementById('showPDF');
      // console.log('localStorage.getItem("20220107035325502.pdf")=', localStorage.getItem("20220107035325502.pdf"));

      // showPDF.src = localStorage.getItem("20220107035325502.pdf");
    }
  }

  readBlob(blob: File){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(blob);
    });
  }

  async printPDF(pdfData: any) {
     // 將檔案處理成 base64
      pdfData = await this.readBlob(pdfData);

      // 將 base64 中的前綴刪去，並進行解碼
      const data = atob(pdfData.substring(Base64Prefix.length));

      // 利用解碼的檔案，載入 PDF 檔及第一頁
      const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
      const pdfPage = await pdfDoc.getPage(1);

      // 設定尺寸及產生 canvas
      const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // 設定 PDF 所要顯示的寬高及渲染
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      // const renderTask = pdfPage.render(renderContext);

      // 回傳做好的 PDF canvas
      // return renderTask.promise.then(() => canvas);
  }


  async pdfToImage(pdfData: any) {

    // 設定 PDF 轉為圖片時的比例
    const scale = 1 / window.devicePixelRatio;

    // 回傳圖片
    return new fabric.Image(pdfData, {
      // id: "renderPDF",
      scaleX: scale,
      scaleY: scale,
    });
  }

}
