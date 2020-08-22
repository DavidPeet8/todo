//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemModalComponent } from 'app/components/add-item-modal/add-item-modal.component';
import { AppComponent } from 'app/app.component';

const routes: Routes = [
	{
		path: 'add-item', component: AddItemModalComponent
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }