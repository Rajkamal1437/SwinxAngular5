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

 constructor(public dialog: MatDialog , public dialog1: MatDialog , public dialog2: MatDialog  , public dialog3: MatDialog , public dialog4: MatDialog) {}

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

 openapprovers(): void {
   let dialogRef1 = this.dialog1.open(approverspopup, {
     width: '30%',
     data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
   });

   dialogRef1.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.CertifierName = result;
   });
 }

 openprojects(): void {
   let dialogRef2 = this.dialog2.open(projectspopup, {
     width: '30%',
     data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
   });

   dialogRef2.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.CertifierName = result;
   });
 }

  opencostcenter(): void {
    let dialogRef3 = this.dialog3.open(costcenterpopup, {
      width: '30%',
      data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
    });

    dialogRef3.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.CertifierName = result;
    });
  }

  opensuppliers(): void {
    let dialogRef4 = this.dialog4.open(supplierspopup, {
      width: '30%',
      data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
    });

    dialogRef4.afterClosed().subscribe(result => {
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
  var_name = true;

  constructor(
    public dialogRef: MatDialogRef<invoicedetailpopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'approverspopup',
  templateUrl: 'approverspopup.html',
})
export class approverspopup {
  var_name = true;

  constructor(
    public dialogRef1: MatDialogRef<approverspopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef1.close();
  }
}

@Component({
  selector: 'projectspopup',
  templateUrl: 'projectspopup.html',
})
export class projectspopup {
  var_name = true;

  constructor(
    public dialogRef2: MatDialogRef<projectspopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef2.close();
  }
}

@Component({
  selector: 'costcenterpopup',
  templateUrl: 'costcenterpopup.html',
})
export class costcenterpopup {
  var_name = true;

  constructor(
    public dialogRef3: MatDialogRef<costcenterpopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef3.close();
  }
}

@Component({
  selector: 'supplierspopup',
  templateUrl: 'supplierspopup.html',
})
export class supplierspopup {
  var_name = true;

  constructor(
    public dialogRef4: MatDialogRef<supplierspopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef4.close();
  }
}
