import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    droparrow : boolean;
    dropdown: dropdownarray[];
};
declare interface dropdownarray {
  path: string;
  title: string;
  icon: string;
  class: string;
};
export const ROUTES : any[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  //  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  //
  //  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  //  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
  //   { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },

    { path: '/toapprove', title: 'To Approve',  icon:'content_paste', class: '' },
    { path: '/sentinvoice', title: 'Sent Invoice',  icon:'send', class: '1', droparrow: true,
      dropdown:
      [
        { path: '/projects', title: 'Projects',  icon:'P', class: '' },
        { path: '/costcenters', title: 'CostCenters',  icon:'monetization_on', class: '' }
      ]
    },
    { path: '/parked', title: 'Parked',  icon:'bubble_chart', class: '' },
    {  title: 'Invoice Flow',  icon:'description', class: '',droparrow: true,
    dropdown:
    [
      { path: '/notregistered', title: 'NotRegistered',  icon:'no_sim', class: '' },
      { path: '/imported', title: 'Imported',  icon:'get_app', class: '' },
      { path: '/distributed', title: 'Distributed',  icon:'share', class: '' },
      { path: '/countersigned', title: 'Counter Signed',  icon:'verified_user', class: '' }
    ]
    },
    { path: '/allinvoices', title: 'All Invoices',  icon:'library_books', class: '1',droparrow: true,
    dropdown:
    [
      { path: '/projects', title: 'Projects',  icon:'P', class: '' },
      { path: '/costcenters', title: 'CostCenters',  icon:'monetization_on', class: '' },
      { path: '/accounts', title: 'Accounts',  icon:'account_balance_wallet', class: '' }
    ]
    },
    { path: '/suppliersList', title: 'Suppliers List',  icon:'list', class: '' },
    { title: 'Printer',  icon:'print', class: '',droparrow: true,
    dropdown:
    [
      { path: '/Projects', title: 'Projects',  icon:'P', class: '' },
      { path: '/Costcenters', title: 'CostCenters',  icon:'monetization_on', class: '' },
      { path: '/CertificationList', title: 'Certification List',  icon:'playlist_add_check', class: '' },
      { path: '/DocumentList', title: 'Document List',  icon:'list_alt', class: '' },
      { path: '/MaturiyList', title: 'Maturiy List',  icon:'featured_play_list', class: '' },
      { path: '/MergeInvoice', title: 'Merge Invoice',  icon:'merge_type', class: '' },
      { path: '/ExcelExport', title: 'Excel Export',  icon:'explicit', class: '' }
    ] },
    {  title: 'Settings',  icon:'settings', class: '',droparrow:true,
    dropdown:[
      { path: '/properties', title: 'properties',  icon:'settings_input_component', class: '' },
      { path: '/company', title: 'company',  icon:'card_travel', class: '' },
      { path: '/user',title: 'users',  icon:'supervised_user_circle', class: '' },
      { path: '/createtemplate',title: 'Create Template',  icon:'local_hospital', class: '' },
      { path: '/invoicedetail', title: '',  icon:'', class: '' },
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
  showSubmenu : any;

  constructor() { }

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
}
