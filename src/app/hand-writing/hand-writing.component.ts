import {  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild, OnInit, HostListener } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-hand-writing',
  templateUrl: './hand-writing.component.html',
  styleUrls: ['./hand-writing.component.scss']
})
export class HandWritingComponent implements AfterViewInit {
  imgUrl: string;

  private _canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private paint: boolean;

  private clickX: number[] = [];
  private clickY: number[] = [];
  private clickDrag: boolean[] = [];


        constructor(
          private router: Router
        ){}

  @HostListener('document:mousedown', ['$event'])
  pressMouseEventHandler(event: MouseEvent) {
    this.pressEventHandler(event);
  }

  @HostListener('document:touchstart', ['$event'])
  pressTouchEventHandler(event: TouchEvent) {
    this.pressEventHandler(event);
  }

  @HostListener('document:mousemove', ['$event'])
  mouseDragEventHandler(event: MouseEvent) {
    this.dragEventHandler(event);
  }

  @HostListener('document:touchmove', ['$event'])
  touchDragEventHandler(event: TouchEvent) {
    this.dragEventHandler(event);
  }

  @HostListener('document:mouseup', ['$event'])
  mouseReleaseEventHandler(event: MouseEvent) {
    this.releaseEventHandler();
  }

  @HostListener('document:touchend', ['$event'])
  touchReleaseEventHandler(event: TouchEvent) {
    this.releaseEventHandler();
  }

  @HostListener('document:mouseout', ['$event'])
  cancelMouseEventHandler() {
    this.cancelEventHandler();
  }

  @HostListener('document:touchcancel', ['$event'])
  cancelTouchEventHandler() {
    this.cancelEventHandler();
  }

  saveImage() {
    const canvas: any = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let img = canvas.toDataURL('image/png');
    console.log(img);
    this.imgUrl = img;
    localStorage.clear();
    localStorage.setItem("img", img);
    // location.href('/#/contract');
    this.router.navigateByUrl("/contract");
  }

  ngAfterViewInit() {
    let _canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = _canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    this._canvas = _canvas;
    this.context = context;

    this.redraw();
    this.createUserEvents();
  }


  private createUserEvents() {
    let _canvas = this._canvas;

    document
      .getElementById('clear')
      .addEventListener('click', this.clearEventHandler);
  }

  private redraw() {
    let clickX = this.clickX;
    let context = this.context;
    let clickDrag = this.clickDrag;
    let clickY = this.clickY;
    for (let i = 0; i < clickX.length; ++i) {
      context.beginPath();
      if (clickDrag[i] && i) {
        context.moveTo(clickX[i - 1], clickY[i - 1]);
      } else {
        context.moveTo(clickX[i] - 1, clickY[i]);
      }

      context.lineTo(clickX[i], clickY[i]);
      context.stroke();
    }
    context.closePath();
  }

  private addClick(x: number, y: number, dragging: boolean) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
  }

  private clearCanvas() {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this.clickX = [];
    this.clickY = [];
    this.clickDrag = [];
  }

  private clearEventHandler = () => {
    this.clearCanvas();
  };

  private releaseEventHandler = () => {
    this.paint = false;
    this.redraw();
  };

  private cancelEventHandler = () => {
    this.paint = false;
  };

  private pressEventHandler(e: MouseEvent | TouchEvent) {
    let mouseX = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageX
      : (e as MouseEvent).pageX;
    let mouseY = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageY
      : (e as MouseEvent).pageY;
    mouseX -= this._canvas.offsetLeft;
    mouseY -= this._canvas.offsetTop;

    this.paint = true;
    this.addClick(mouseX, mouseY, false);
    this.redraw();
  }

  private dragEventHandler(e: MouseEvent | TouchEvent) {
    let mouseX = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageX
      : (e as MouseEvent).pageX;
    let mouseY = (e as TouchEvent).changedTouches
      ? (e as TouchEvent).changedTouches[0].pageY
      : (e as MouseEvent).pageY;
    mouseX -= this._canvas.offsetLeft;
    mouseY -= this._canvas.offsetTop;

    if (this.paint) {
      this.addClick(mouseX, mouseY, true);
      this.redraw();
    }

    e.preventDefault();
  }

}
