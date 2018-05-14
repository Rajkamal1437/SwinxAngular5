import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { ToApproveComponent } from './to-approve/to-approve.component';
import { SentinvoiceComponent } from './sentinvoice/sentinvoice.component';
import { ParkedComponent } from './parked/parked.component';
import { NotregisteredComponent } from './notregistered/notregistered.component';
import { ImportedComponent } from './imported/imported.component';
import { DistributedComponent } from './distributed/distributed.component';
import { CountersignedComponent } from './countersigned/countersigned.component';
import { AllinvoicesComponent } from './allinvoices/allinvoices.component';
import { ProjectsComponent } from './projects/projects.component';
import { CostcentersComponent } from './costcenters/costcenters.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PropertiesComponent } from './properties/properties.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { CreatetemplateComponent } from './createtemplate/createtemplate.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
