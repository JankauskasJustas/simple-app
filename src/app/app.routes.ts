import { MainBodyComponent } from './main-body/main-body.component';
import { UiTestComponent } from './ui-test/ui-test.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: 'test', component: UiTestComponent },
    { path: '', pathMatch: 'full', component: MainBodyComponent },
];