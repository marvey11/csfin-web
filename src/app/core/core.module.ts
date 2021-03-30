import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardModule } from "../modules/dashboard/dashboard.module";
import { EvaluationModule } from "../modules/evaluation/evaluation.module";
import { ExchangeModule } from "../modules/exchange/exchange.module";
import { HomeModule } from "../modules/home/home.module";
import { SecurityModule } from "../modules/security/security.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderInterceptor } from "./interceptors";
import { LoaderService, StatusService } from "./services";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations: [FooterComponent, HeaderComponent, SidebarComponent],
    imports: [
        // Angular modules
        CommonModule,
        HttpClientModule,
        RouterModule,
        // project modules
        DashboardModule,
        ExchangeModule,
        EvaluationModule,
        HomeModule,
        SecurityModule
    ],
    exports: [FooterComponent, HeaderComponent, SidebarComponent],
    providers: [LoaderService, StatusService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }]
})
export class CoreModule {}
