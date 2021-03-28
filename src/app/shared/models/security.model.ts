import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

enum SecurityType {
    STOCK = 1,
    ETF = 2,
    UNKNOWN = 99
}

function securityTypeFromString(typeString: string): SecurityType {
    let type: SecurityType;

    switch (typeString) {
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

    return type;
}

function securityTypeToString(itype: SecurityType, plural: boolean = false): string {
    let result: string;

    switch (itype) {
        case SecurityType.STOCK:
            result = plural ? "Stocks" : "Stock";
            break;
        case SecurityType.ETF:
            result = plural ? "ETFs" : "ETF";
            break;
        default:
            result = "Unknown";
    }
    return result;
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
        return new Security(item.id, item.isin, item.nsin, item.name, securityTypeFromString(item.type));
    }
}

export { Security, SecurityAdapter, SecurityType, securityTypeFromString, securityTypeToString };
