import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateExchangeComponent } from "./create-exchange/create-exchange.component";
import { ExchangeListComponent } from "./exchange-list/exchange-list.component";
import { ExchangeRoutingModule } from "./exchange-routing.module";

@NgModule({
    declarations: [CreateExchangeComponent, ExchangeListComponent],
    imports: [CommonModule, ReactiveFormsModule, ExchangeRoutingModule, SharedModule]
})
export class ExchangeModule {}
