import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    droparrow : boolean;
    dropdown: [ path: string, title: string, icon: string, class: string;  ]
}
export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  //  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  //  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  //
  //  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  //  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },

    { path: '/approve', title: 'To Approve',  icon:'content_paste', class: '' },
    { path: '/Sent', title: 'Sent Invoice',  icon:'send', class: '1',droparrow: true,
      dropdown:
      [
        { path: '/SentProjects', title: 'Projects',  icon:'P', class: '' },
        { path: '/SentCostcenters', title: 'CostCenters',  icon:'monetization_on', class: '' }
      ]
    },
    { path: '/Parked', title: 'Parked',  icon:'bubble_chart', class: '' },
    { path: '/flow', title: 'Invoice Flow',  icon:'description', class: '',droparrow: true,
    dropdown:
    [
      { path: '/NotRegistered', title: 'NotRegistered',  icon:'no_sim', class: '' },
      { path: '/Imported', title: 'Imported',  icon:'get_app', class: '' },
      { path: '/Distributed', title: 'Distributed',  icon:'share', class: '' },
      { path: '/Countersigned', title: 'Counter Signed',  icon:'verified_user', class: '' }
    ]
    },
    { path: '/All Invoices', title: 'All Invoices',  icon:'library_books', class: '1',droparrow: true,
    dropdown:
    [
      { path: '/Projects', title: 'Projects',  icon:'P', class: '' },
      { path: '/Costcenters', title: 'CostCenters',  icon:'monetization_on', class: '' },
      { path: '/Accounts', title: 'Accounts',  icon:'send', class: '' }
    ]
    },
    { path: '/suppliersList', title: 'Suppliers List',  icon:'list', class: '' },
    { path: '/Printer', title: 'Printer',  icon:'print', class: '',droparrow: true,
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
    { path: '/Settings', title: 'Settings',  icon:'settings', class: '' },
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
