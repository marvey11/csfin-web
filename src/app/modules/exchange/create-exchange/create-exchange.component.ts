import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ExchangeService } from "src/app/core/http";
import { StatusService } from "src/app/core/services";
import { Exchange, StatusType } from "src/app/shared/models";

@Component({
    selector: "app-create-exchange",
    templateUrl: "./create-exchange.component.html",
    styleUrls: ["./create-exchange.component.css"]
})
export class CreateExchangeComponent implements OnInit {
    form!: FormGroup;
    exchangeName!: FormControl;

    constructor(private service: ExchangeService, private statusService: StatusService, private fb: FormBuilder) {}

    get isButtonDisabled(): boolean {
        return !this.form.valid;
    }

    onSubmit(): void {
        this.statusService.reset();

        const exchange = new Exchange(-1, this.exchangeName.value);
        this.service.create(exchange).subscribe(
            () => {
                this.statusService.update(StatusType.success, "Operation succeded", "SUCCESS");
                this.form.reset();
            },
            (error) => {
                this.statusService.update(StatusType.error, JSON.stringify(error));
            }
        );
    }

    ngOnInit(): void {
        this.statusService.reset();

        this.exchangeName = new FormControl("", [Validators.minLength(3), Validators.required]);
        this.form = this.fb.group({
            exchangeName: this.exchangeName
        });
    }
}
