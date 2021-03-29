import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoaderComponent } from "./components/loader/loader.component";
import { SpinnerLoaderComponent } from "./components/spinner-loader/spinner-loader.component";

@NgModule({
    declarations: [LoaderComponent, SpinnerLoaderComponent],
    imports: [CommonModule],
    exports: [LoaderComponent, SpinnerLoaderComponent]
})
export class SharedModule {}
