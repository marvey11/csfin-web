import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { GroupingToggleComponent } from "./components/grouping-toggle/grouping-toggle.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SpinnerLoaderComponent } from "./components/spinner-loader/spinner-loader.component";
import { StatusMessageComponent } from "./components/status-message/status-message.component";

@NgModule({
    declarations: [GroupingToggleComponent, LoaderComponent, SpinnerLoaderComponent, StatusMessageComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [GroupingToggleComponent, LoaderComponent, SpinnerLoaderComponent, StatusMessageComponent]
})
export class SharedModule {}
