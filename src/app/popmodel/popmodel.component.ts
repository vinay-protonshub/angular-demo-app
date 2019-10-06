import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popmodel',
  templateUrl: './popmodel.component.html',
  styleUrls: ['./popmodel.component.css']
})
export class PopmodelComponent  {

    constructor(
    public dialogRef: MatDialogRef<PopmodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}