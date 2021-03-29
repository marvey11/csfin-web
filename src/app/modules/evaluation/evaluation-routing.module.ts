import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerformanceComponent } from "./performance/performance.component";
import { RSLevyComponent } from "./rs-levy/rs-levy.component";

const routes: Routes = [
    {
        path: "evaluate/performance",
        component: PerformanceComponent
    },
    {
        path: "evaluate/rs-levy",
        component: RSLevyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluationRoutingModule {}
