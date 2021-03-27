import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardModule } from "../modules/dashboard/dashboard.module";
import { HomeModule } from "../modules/home/home.module";
import { SecurityModule } from "../modules/security/security.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderInterceptor } from "./interceptors";
import { LoaderService } from "./services";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations: [HeaderComponent, SidebarComponent, FooterComponent],
    imports: [RouterModule, HttpClientModule, CommonModule, DashboardModule, SecurityModule, HomeModule],
    exports: [HeaderComponent, SidebarComponent, FooterComponent],
    providers: [LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }]
})
export class CoreModule {}
