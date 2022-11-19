import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  public get fileInfo(): FileInfo{
    return JSON.parse(localStorage.getItem('fileInfo'));
  }
  public set fileInfo(value: FileInfo){
    localStorage.setItem('fileInfo', JSON.stringify(value));
  }
}


export class FileInfo {
  public lastModified: string = '';
  public name: string = '';
  public size: number = 0;
  public type: string = 'application/pdf';
  public webkitRelativePath: string = '';
}
