import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FamousPplDescriptionComponent } from './famous-ppl-description/famous-ppl-description.component';
import { FamousPplFormComponent } from './famous-ppl-form/famous-ppl-form.component';
import { FamousPplUpdateComponent } from './famous-ppl-update/famous-ppl-update.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'description/:id', component: FamousPplDescriptionComponent},
    { path: 'description/update/:id', component: FamousPplUpdateComponent},
    { path: 'add', component: FamousPplFormComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}