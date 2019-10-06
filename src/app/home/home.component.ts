import { Component, OnInit } from '@angular/core';
import {CommanService} from '../../common/services/comman.service';
import {MatDialog, MatDialogConfig} from "@angular/material";

import { PopmodelComponent } from '../popmodel/popmodel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private dialog: MatDialog,private _CommanService: CommanService) { }


  ngOnInit() {
  	this.loopingFunction();
  	setInterval(() => {
	  	this.loopingFunction();
    }, 60*10);
  }

  show(id){
	const dialogRef = this.dialog.open(PopmodelComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  loopingFunction()
  {
  	let aa  = this._CommanService.GetMethod().subscribe(
    data => {
    	this.data = (data) ? data :'';
    }
    );
  }
}
