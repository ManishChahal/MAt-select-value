import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptureDataService {

  constructor() { }

  public dataObj = {selectedItem : {name : '', id : ''}};

  setData(dataObj)
  {
    this.dataObj['selectedItem'] = dataObj;
  }

  getData()
  {
    return this.dataObj['selectedItem'];
  }
}
