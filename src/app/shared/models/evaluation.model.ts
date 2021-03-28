import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";
import { SecurityType, securityTypeFromString } from "./security.model";

class PerformanceEvaluationItem {
    constructor(
        public isin: string,
        public name: string,
        public type: SecurityType,
        public exchange: string,
        public newestDate: Date,
        public newestPrice: number,
        public baseDate: Date,
        public basePrice: number
    ) {}
}

@Injectable({ providedIn: "root" })
class PerformanceEvaluationItemAdapter implements Adapter<PerformanceEvaluationItem> {
    adapt(item: any): PerformanceEvaluationItem {
        return new PerformanceEvaluationItem(
            item.securityISIN,
            item.securityName,
            securityTypeFromString(item.instrumentType),
            item.exchangeName,
            new Date(item.newestDate),
            Number(item.newestPrice),
            new Date(item.baseDate),
            Number(item.basePrice)
        );
    }
}

type PerformanceInterval = {
    count: number;
    unit: "year" | "month" | "day";
    label: string;
};

export { PerformanceEvaluationItem, PerformanceEvaluationItemAdapter, PerformanceInterval };
