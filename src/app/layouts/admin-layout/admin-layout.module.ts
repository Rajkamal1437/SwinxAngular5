import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { SuppliersListComponent } from '../../suppliers-list/suppliers-list.component';
import { ToApproveComponent } from '../../to-approve/to-approve.component';
import { SentinvoiceComponent } from '../../sentinvoice/sentinvoice.component';
import { ParkedComponent } from '../../parked/parked.component';
import { NotregisteredComponent } from '../../notregistered/notregistered.component';
import { ImportedComponent } from '../../imported/imported.component';
import { DistributedComponent } from '../../distributed/distributed.component';
import { CountersignedComponent } from '../../countersigned/countersigned.component';
import { AllinvoicesComponent } from '../../allinvoices/allinvoices.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { CostcentersComponent } from '../../costcenters/costcenters.component';
import { AccountsComponent } from '../../accounts/accounts.component';
import { PropertiesComponent } from '../../properties/properties.component';
import { CompanyComponent } from '../../company/company.component';
import { UserComponent } from '../../user/user.component';
import { CreatetemplateComponent } from '../../createtemplate/createtemplate.component';
import { InvoicedetailComponent } from '../../invoicedetail/invoicedetail.component';
import { invoicedetailpopup } from '../../invoicedetail/invoicedetail.component';
import { ProjectListComponent } from '../../project-list/project-list.component';
import { CostcenterListComponent } from '../../costcenter-list/costcenter-list.component';
import { AccountListComponent } from '../../account-list/account-list.component';

import {
  MatAutocompleteModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatCardModule,
   MatCheckboxModule,
   MatChipsModule,
   MatDatepickerModule,
   MatDialogModule,
   MatDividerModule,
   MatExpansionModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,
   MatNativeDateModule,
   MatPaginatorModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatRippleModule,
   MatSelectModule,
   MatSidenavModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatSortModule,
   MatStepperModule,
   MatTableModule,
   MatTabsModule,
   MatToolbarModule,
   MatTooltipModule,
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatAutocompleteModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatCardModule,
     MatCheckboxModule,
     MatChipsModule,
     MatDatepickerModule,
     MatDialogModule,
     MatDividerModule,
     MatExpansionModule,
     MatGridListModule,
     MatIconModule,
     MatInputModule,
     MatListModule,
     MatMenuModule,
     MatNativeDateModule,
     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatRippleModule,
     MatSelectModule,
     MatSidenavModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSnackBarModule,
     MatSortModule,
     MatStepperModule,
     MatTableModule,
     MatTabsModule,
     MatToolbarModule,
     MatTooltipModule,
  ],
    entryComponents: [invoicedetailpopup],
  declarations: [
    SuppliersListComponent,
    ToApproveComponent,
    SentinvoiceComponent,
    ParkedComponent,
    NotregisteredComponent,
    ImportedComponent,
    DistributedComponent,
    CountersignedComponent,
    AllinvoicesComponent,
    ProjectsComponent,
    CostcentersComponent,
    AccountsComponent,
    PropertiesComponent,
    CompanyComponent,
    UserComponent,
    CreatetemplateComponent,
    InvoicedetailComponent,
    invoicedetailpopup,
    ProjectListComponent,
    CostcenterListComponent,
    AccountListComponent,
  ]
})

export class AdminLayoutModule {}
