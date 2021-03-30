import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { GroupingToggleComponent } from "./components/grouping-toggle/grouping-toggle.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SpinnerLoaderComponent } from "./components/spinner-loader/spinner-loader.component";

@NgModule({
    declarations: [GroupingToggleComponent, LoaderComponent, SpinnerLoaderComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [GroupingToggleComponent, LoaderComponent, SpinnerLoaderComponent]
})
export class SharedModule {}
