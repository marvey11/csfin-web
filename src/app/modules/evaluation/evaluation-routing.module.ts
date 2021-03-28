import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerformanceComponent } from "./performance/performance.component";

const routes: Routes = [
    {
        path: "evaluate/performance",
        component: PerformanceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluationRoutingModule {}
