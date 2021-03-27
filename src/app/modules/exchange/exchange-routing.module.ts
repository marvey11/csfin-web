import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateExchangeComponent } from "./create-exchange/create-exchange.component";
import { ExchangeListComponent } from "./exchange-list/exchange-list.component";

const routes: Routes = [
    {
        path: "exchanges",
        component: ExchangeListComponent
    },
    {
        path: "exchange/create",
        component: CreateExchangeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExchangeRoutingModule {}
