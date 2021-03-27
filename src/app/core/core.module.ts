import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SecurityModule } from "../modules/security/security.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardModule } from "../modules/dashboard/dashboard.module";

@NgModule({
    declarations: [HeaderComponent],
    imports: [HttpClientModule, CommonModule, DashboardModule, SecurityModule],
    exports: [HeaderComponent]
})
export class CoreModule {}
