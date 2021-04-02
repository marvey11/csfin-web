export enum StatusType {
    none,
    success,
    information,
    warning,
    error
}

export class StatusMessage {
    private statusType: StatusType;
    private statusMessage: string;
    private statusLabel: string;

    public get type(): StatusType {
        return this.statusType;
    }

    public get message(): string {
        return this.statusMessage;
    }

    public get label(): string {
        return this.statusLabel;
    }

    constructor(type?: StatusType, message?: string, label?: string) {
        this.statusType = type || StatusType.none;
        this.statusMessage = message || "";
        this.statusLabel = label || "";
    }
}
