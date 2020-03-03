import { Component, OnInit, Optional,NgZone,HostBinding, Input, Output} from '@angular/core';
import {sharedService} from 'src/app/services/sharedService';
import * as $ from 'jquery';
import { EventEmitter } from 'events';
import {AppComponent} from 'src/app/app.component';


@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {
public ok : any = {};
showPopup1 = true;
@Input() message : string;
@Input() header : string;
@Input() showPopup : boolean;

// @Output() talk : EventEmitter<boolean,string,string> = new EventEmitter<boolean,string,string>();

  constructor(private _sharedService : sharedService, private zone: NgZone,
    private appComponent : AppComponent) {}

  ngOnInit() {
  }

  // public showPopupMethod(header: string, message : string){
  //   this.zone.run(() => {
  //     console.log('in zone ' +header +message);
  //     this.ok.showPopup1 = !this.ok.showPopup1;
  //     this.ok.header = header;
  //     this.ok.message = message;
  //     this.message = message;
  //     this.header = header;
  //     this.showPopup = true;
  //   });
  //   this.ok.header = header;
  //   this.ok.message = message;
  //   $('.popup-main').prop('hidden',false);
  //   setTimeout(() => this.ok.showPopup1 = true,1000);
    
  //   console.log('in show method ' +this.ok.showPopup1)
  // };

  closeError(){
    // $('.popup-main').prop('hidden',true);
    // this.ok.showPopup1 = false;
    // console.log("close "+this.ok.showPopup1);
    this.appComponent.showPopup = false;
    if(this.appComponent.message = "Category saved successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }
    if(this.appComponent.message = "Category deleted successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }
    
  }
 
}
