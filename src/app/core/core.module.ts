import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SecurityModule } from "../modules/security/security.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [HttpClientModule, CommonModule, SecurityModule],
    exports: [HeaderComponent]
})
export class CoreModule {}
