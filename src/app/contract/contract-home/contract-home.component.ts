import { Component, ElementRef, VERSION, ViewChild, OnInit } from "@angular/core";
import * as pdfjsLib from 'pdfjs-dist';
if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
  // const WORKER_URL = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  // pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@3.0.279/build/pdf.worker.js';
}

const Base64Prefix = "data:application/pdf;base64,";

@Component({
  selector: 'app-contract-home',
  templateUrl: './contract-home.component.html',
  styleUrls: ['./contract-home.component.scss']
})
export class ContractHomeComponent implements OnInit {
  @ViewChild("myCanvas", { static: false }) canvas: ElementRef;
  pdfData: string;
  data: string;

  constructor() { }

  ngOnInit(): void {
    this.initRun();
  }

 async initRun(){
  // GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`;
     if (localStorage.getItem('pdfFile') ) {
       this.pdfData = localStorage.getItem('pdfFile');
       this.data = atob(this.pdfData.substring(Base64Prefix.length));

       // 利用解碼的檔案，載入 PDF 檔及第一頁
        const pdfDoc = await pdfjsLib.getDocument(`{${this.data}}`).promise;
        const pdfPage = await pdfDoc.getPage(1);

        // 設定尺寸及產生 canvas
        const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
        // const canvas = document.createElement("canvas");
        var canvas = document.getElementById("pdf-canvas") as HTMLCanvasElement;

        const context = canvas.getContext("2d");

        // 設定 PDF 所要顯示的寬高及渲染
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport,
        };
        const renderTask = pdfPage.render(renderContext);

        // 回傳做好的 PDF canvas
        // return renderTask.promise.then(() => canvas);


     }
    //  var pdf = await getDocument(await file.arrayBuffer()).promise;
    //  var page = await pdf.getPage(1);
    //  var viewport = page.getViewport({ scale: 1 });
    //  var canvas = document.getElementById("pdf-canvas") as HTMLCanvasElement;
    //  canvas.width = viewport.width;
    //  canvas.height = viewport.height;
    //  page.render({
    //    canvasContext: canvas.getContext("2d")!,
    //    viewport: viewport
    //  });
    //  console.log("Rendered");
 }


}
