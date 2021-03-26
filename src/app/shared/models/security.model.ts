import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

enum SecurityType {
    STOCK = 1,
    ETF = 2,
    UNKNOWN = 99
}

class Security {
    constructor(
        public id: number,
        public isin: string,
        public nsin: string,
        public name: string,
        public type: SecurityType
    ) {}
}

@Injectable({
    providedIn: "root"
})
class SecurityAdapter implements Adapter<Security> {
    adapt(item: any): Security {
        let type: SecurityType;

        switch (item.type) {
            case "stock":
                type = SecurityType.STOCK;
                break;
            case "etf":
                type = SecurityType.ETF;
                break;
            default:
                type = SecurityType.UNKNOWN;
                break;
        }

        return new Security(item.id, item.isin, item.nsin, item.name, type);
    }
}

export { Security, SecurityAdapter, SecurityType };
