import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StatusService } from "src/app/core/services";
import { StatusMessage } from "../../models";
import { StatusType } from "../../models/status-message.model";

@Component({
    selector: "app-status-message",
    templateUrl: "./status-message.component.html",
    styleUrls: ["./status-message.component.css"]
})
export class StatusMessageComponent implements OnInit {
    statusSubject: BehaviorSubject<StatusMessage>;

    statusTypes = StatusType;

    constructor(private service: StatusService) {
        this.statusSubject = this.service.statusSubject;
    }

    ngOnInit(): void {}
}
