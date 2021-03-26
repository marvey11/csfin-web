import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecurityListComponent } from "./security-list/security-list.component";

const routes: Routes = [
    {
        path: "securities",
        component: SecurityListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule {}
