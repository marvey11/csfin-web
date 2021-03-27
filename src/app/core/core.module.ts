import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SecurityModule } from "../modules/security/security.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardModule } from "../modules/dashboard/dashboard.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent, SidebarComponent],
    imports: [RouterModule, HttpClientModule, CommonModule, DashboardModule, SecurityModule],
    exports: [HeaderComponent, SidebarComponent]
})
export class CoreModule {}
