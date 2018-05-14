import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
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

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatGridListModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
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
  ]
})

export class AdminLayoutModule {}
