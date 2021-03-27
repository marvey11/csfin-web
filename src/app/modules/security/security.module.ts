import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SecurityRoutingModule } from "./security-routing.module";
import { SecurityListComponent } from "./security-list/security-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [SecurityListComponent],
    imports: [CommonModule, SharedModule, SecurityRoutingModule]
})
export class SecurityModule {}
