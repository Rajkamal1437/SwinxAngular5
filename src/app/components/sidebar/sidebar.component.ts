import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  droparrow: boolean;
  dropdown: dropdownarray[];
};
declare interface dropdownarray {
  path: string;
  title: string;
  icon: string;
  class: string;
};
export const ROUTES: any[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  //  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/toapprove', title: 'To Approve', icon: 'content_paste', class: '' },
  {
    path: '/sentinvoice', title: 'Sent Invoice', icon: 'send', class: '1', droparrow: true,
    dropdown:
      [
        { path: '/projects', title: 'Projects', icon: 'P', class: '' },
        { path: '/costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' }
      ]
  },
  { path: '/parked', title: 'Parked', icon: 'bubble_chart', class: '' },
  {
    title: 'Invoice Flow', icon: 'description', class: '', droparrow: true,
    dropdown:
      [
        { path: '/notregistered', title: 'NotRegistered', icon: 'no_sim', class: '' },
        { path: '/imported', title: 'Imported', icon: 'get_app', class: '' },
        { path: '/distributed', title: 'Distributed', icon: 'share', class: '' },
        { path: '/countersigned', title: 'Counter Signed', icon: 'verified_user', class: '' }
      ]
  },
  {
    path: '/allinvoices', title: 'All Invoices', icon: 'library_books', class: '1', droparrow: true,
    dropdown:
      [
        { path: '/projects', title: 'Projects', icon: 'P', class: '' },
        { path: '/costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' },
        { path: '/accounts', title: 'Accounts', icon: 'account_balance_wallet', class: '' }
      ]
  },
  { path: '/suppliersList', title: 'Suppliers List', icon: 'list', class: '' },
  {
    title: 'Printer', icon: 'print', class: '', droparrow: true,
    dropdown:
      [
        { path: '/Projects', title: 'Projects', icon: 'P', class: '' },
        { path: '/Costcenters', title: 'CostCenters', icon: 'monetization_on', class: '' },
        { path: '/CertificationList', title: 'Certification List', icon: 'playlist_add_check', class: '' },
        { path: '/DocumentList', title: 'Document List', icon: 'list_alt', class: '' },
        { path: '/MaturiyList', title: 'Maturiy List', icon: 'featured_play_list', class: '' },
        { path: '/MergeInvoice', title: 'Merge Invoice', icon: 'merge_type', class: '' },
        { path: '/ExcelExport', title: 'Excel Export', icon: 'explicit', class: '' }
      ]
  },
  {
    title: 'Settings', icon: 'settings', class: '', droparrow: true,
    dropdown: [
      { path: '/properties', title: 'properties', icon: 'settings_input_component', class: '' },
      { path: '/company', title: 'company', icon: 'card_travel', class: '' },
      { path: '/user', title: 'users', icon: 'supervised_user_circle', class: '' },
      { path: '/createtemplate', title: 'Create Template', icon: 'local_hospital', class: '' },
      { path: '/ProjectList', title: '', icon: '', class: '' },
      { path: '/CostcenterList', title: '', icon: '', class: '' },
      { path: '/AccountList', title: '', icon: '', class: '' },
      { path: '/invoicedetail', title: '', icon: '', class: '' },
    ]
  },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  showSubmenu: any
  CertifierName: string;
  Certifier: string;

  constructor(public dialog1: MatDialog, public dialog2 : MatDialog, public dialog3: MatDialog ) { }

  opencertificatelist(): void {
    let dialogRef1 = this.dialog1.open(certificatelistpopup, {
      width: '50%',
      data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  opendocumentlist(): void {
    let dialogRef2 = this.dialog2.open(documentlistpopup, {
      width: '50%',
      data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openmergeinvoice(): void {
    let dialogRef3 = this.dialog3.open(mergeinvoicepopup, {
      width: '60%',
      data: { CertifierName: this.CertifierName, Certifier: this.Certifier }
    });

    dialogRef3.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.showSubmenu = true;
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  openprint(x) {
    if (x == "Projects") {
      window.open("http://localhost:4200/assets/project.pdf", "_blank");
    }
    if (x == "CostCenters") {
      window.open("http://localhost:4200/assets/costcenter.pdf", "_blank");
    }
    if(x =="Certification List"){
      this.opencertificatelist();
    }
    if(x == "Document List"){
      this.opendocumentlist();
    }
    if(x == "Maturiy List"){
        this.opencertificatelist();
    }
    if(x == "Merge Invoice"){
      this.openmergeinvoice();
    }
    if(x == "Excel Export"){
      this.openmergeinvoice();
    }
  }
}

@Component({
  selector: 'certificatelistpopup',
  templateUrl: 'certificatelistpopup.html',
})
export class certificatelistpopup {

  constructor(
    public dialogRef1: MatDialogRef<certificatelistpopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef1.close();
  }
}


@Component({
  selector: 'documentlistpopup',
  templateUrl: 'doclistpopup.html',
})
export class documentlistpopup {

  constructor(
    public dialogRef2: MatDialogRef<documentlistpopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef2.close();
  }

}

@Component({
  selector: 'mergeinvoicepopup',
  templateUrl: 'mergeinvoicepopup.html',
})
export class mergeinvoicepopup {

  constructor(
    public dialogRef3: MatDialogRef<mergeinvoicepopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef3.close();
  }

}
