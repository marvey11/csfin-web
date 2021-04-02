import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

enum SecurityType {
    stock = 1,
    etf = 2,
    unknown = 99
}

const securityTypeFromString = (typeString: string): SecurityType => {
    let type: SecurityType;

    switch (typeString) {
        case "stock":
            type = SecurityType.stock;
            break;
        case "etf":
            type = SecurityType.etf;
            break;
        default:
            type = SecurityType.unknown;
            break;
    }

    return type;
};

const securityTypeToString = (itype: SecurityType, plural: boolean = false): string => {
    let result: string;

    switch (itype) {
        case SecurityType.stock:
            result = plural ? "Stocks" : "Stock";
            break;
        case SecurityType.etf:
            result = plural ? "ETFs" : "ETF";
            break;
        default:
            result = "Unknown";
    }
    return result;
};

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
