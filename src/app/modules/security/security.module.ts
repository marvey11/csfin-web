import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SecurityListComponent } from "./security-list/security-list.component";
import { SecurityRoutingModule } from "./security-routing.module";

@NgModule({
    declarations: [SecurityListComponent],
    imports: [CommonModule, SecurityRoutingModule, SharedModule]
})
export class SecurityModule {}
