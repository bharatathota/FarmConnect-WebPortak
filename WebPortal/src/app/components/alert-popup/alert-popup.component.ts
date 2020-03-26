import { Component, OnInit, Optional,NgZone,HostBinding, Input, Output} from '@angular/core';
import { sharedService } from 'src/app/services/sharedService';
import * as $ from 'jquery';
import { EventEmitter } from 'events';
import { AppComponent } from 'src/app/app.component';


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

  closeError(){
    this.appComponent.showPopup = false;
    if(this.appComponent.message = "Category saved successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }
    if(this.appComponent.message = "Category deleted successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }

    if(this.appComponent.message = "Category updated successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }

    if(this.appComponent.message = "Product saved successfully") {
      this._sharedService.setMessage(this.appComponent.message);
    }

  }

}
