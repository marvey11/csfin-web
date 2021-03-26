import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SecurityRoutingModule } from "./security-routing.module";
import { SecurityListComponent } from "./security-list/security-list.component";

@NgModule({
    declarations: [SecurityListComponent],
    imports: [CommonModule, SecurityRoutingModule]
})
export class SecurityModule {}
