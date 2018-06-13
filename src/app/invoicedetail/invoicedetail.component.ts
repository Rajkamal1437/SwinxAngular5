import { Component, OnInit , Inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.scss']
})
export class InvoicedetailComponent implements OnInit {
  date = new FormControl(new Date());
   serializedDate = new FormControl((new Date()).toISOString());
dropdown : any[];


CertifierName : string;
 Certifier : string;

 constructor(public dialog: MatDialog) {}

 openDialog(): void {
   let dialogRef = this.dialog.open(invoicedetailpopup, {
     width: '450px',
     data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.CertifierName = result;
   });
 }

  ngOnInit() {
  }

}

@Component({
  selector: 'invoicedetailpopup',
  templateUrl: 'invoicedetail.popup.html',
})
export class invoicedetailpopup {
  constructor(
    public dialogRef: MatDialogRef<invoicedetailpopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
