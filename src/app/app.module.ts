import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SecurityModule } from "./modules/security/security.module";

const appRoutes: Routes = [];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), SecurityModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
