import { Routes } from '@angular/router';

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
import { ProjectListComponent } from '../../project-list/project-list.component';
import { CostcenterListComponent } from '../../costcenter-list/costcenter-list.component';
import { AccountListComponent } from '../../account-list/account-list.component';

export const AdminLayoutRoutes: Routes = [

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
    { path: 'invoicedetail',  component: InvoicedetailComponent },
    { path: 'ProjectList',    component: ProjectListComponent },
    { path: 'CostcenterList', component: CostcenterListComponent },
    { path: 'AccountList',    component: AccountListComponent},
];
