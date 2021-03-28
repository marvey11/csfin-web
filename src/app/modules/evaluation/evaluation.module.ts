import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EvaluationRoutingModule } from "./evaluation-routing.module";
import { PerformanceComponent } from "./performance/performance.component";

@NgModule({
    declarations: [PerformanceComponent],
    imports: [CommonModule, ReactiveFormsModule, EvaluationRoutingModule, SharedModule]
})
export class EvaluationModule {}
