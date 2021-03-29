import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EvaluationRoutingModule } from "./evaluation-routing.module";
import { PerformanceComponent } from "./performance/performance.component";
import { RSLevyComponent } from "./rs-levy/rs-levy.component";

@NgModule({
    declarations: [PerformanceComponent, RSLevyComponent],
    imports: [CommonModule, ReactiveFormsModule, EvaluationRoutingModule, SharedModule]
})
export class EvaluationModule {}
