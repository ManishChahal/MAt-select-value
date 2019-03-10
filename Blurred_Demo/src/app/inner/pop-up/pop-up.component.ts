import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { CaptureDataService } from '../capture-data.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, AfterViewInit {

  constructor(private dataCapture : CaptureDataService) { }

  @Output() notifier : EventEmitter<any> = new EventEmitter();
  popUpSteps = {x:'visited',y : 'active', z : 'inactive'};
  selected = {name : '' , id : ''};
  options = [{name : 'abc', id : 1},{name : 'xyz', id : 2},{name : 'pqr', id : 3}];
  
  ngOnInit() {
    document.getElementById('mainContents').style.webkitFilter = 'blur(5px)';
    document.getElementById('mainContents').style.filter = 'blur(5px)';
    this.selected = this.dataCapture.getData();
  }

  ngAfterViewInit ()
  {
    
  }

  notifyParent()
  {
    this.notifier.emit();
  }

  changeColors(){
    this.popUpSteps = {x:'active',y : 'visited', z : 'inactive'};
  }

  lol(data)
  {
    console.log(data);
    this.dataCapture.setData(data.value);
  }

}
