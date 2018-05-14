import { Routes } from '@angular/router';

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
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'suppliersList',  component: SuppliersListComponent },
    { path: 'toapprove',      component: ToApproveComponent },
    { path: 'sentinvoice',    component: SentinvoiceComponent },
    { path: 'parked',         component: ParkedComponent },
    { path: 'notregistered',  component: NotregisteredComponent },
    { path: 'imported',       component: ImportedComponent },
    { path: 'distributed',    component: DistributedComponent },
    { path: 'countersigned',  component: CountersignedComponent },
    { path: 'allinvoices',    component: AllinvoicesComponent },
    { path: 'projects',       component: ProjectsComponent },
    { path: 'costcenters',    component: CostcentersComponent },
    { path: 'accounts',       component: AccountsComponent },
    { path: 'properties',     component: PropertiesComponent },
    { path: 'company',        component: CompanyComponent },
    { path: 'user',           component: UserComponent },
    { path: 'createtemplate', component: CreatetemplateComponent },

];
