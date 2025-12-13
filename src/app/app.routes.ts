import { Routes } from '@angular/router';
import { LoginPage } from './+public/+page/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { privateGuard } from './+shared/private-guard';
import { DashboardPage } from './+private/+page/dashboard-page/dashboard-page';
import { BookPage } from './+private/+page/book-page/book-page';
import { MembersPage } from './+private/+page/members-page/members-page';
import { BorrowsPege } from './+private/+page/borrows-pege/borrows-pege';
import { ReportsPage } from './+private/+page/reports-page/reports-page';

export const routes: Routes = [
    {path:'login',component:LoginPage},
    {path:'private',canActivate:[privateGuard],component:PrivateTemplate,children:[
        {path:'dashboard',component:DashboardPage},
        {path:'books',component:BookPage},
        {path:'members',component:MembersPage},
        {path:'borrows',component:BorrowsPege},
        {path:'Reports',component:ReportsPage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'}
    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
