import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SecurityModule } from "../modules/security/security.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardModule } from "../modules/dashboard/dashboard.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [HeaderComponent, SidebarComponent, FooterComponent],
    imports: [RouterModule, HttpClientModule, CommonModule, DashboardModule, SecurityModule],
    exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {}
