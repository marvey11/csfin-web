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
        public performance: number
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
            Number(item.performance)
        );
    }
}

type PerformanceInterval = {
    count: number;
    unit: "year" | "month" | "day";
    label: string;
};

class RSLevyResponseItem {
    constructor(
        public isin: string,
        public name: string,
        public itype: SecurityType,
        public exchange: string,
        public newestWeeklyCloseDate: Date,
        public rslValue: number
    ) {}
}

@Injectable({ providedIn: "root" })
class RSLevyAdapter implements Adapter<RSLevyResponseItem> {
    adapt(item: any): RSLevyResponseItem {
        return new RSLevyResponseItem(
            item.securityISIN,
            item.securityName,
            securityTypeFromString(item.instrumentType),
            item.exchangeName,
            new Date(item.newestWeeklyClose),
            Number(item.rslValue)
        );
    }
}

type RSLevyAlgorithm = {
    algorithm: "daily" | "weekly";
    label: string;
};

export {
    PerformanceEvaluationItem,
    PerformanceEvaluationItemAdapter,
    PerformanceInterval,
    RSLevyAdapter,
    RSLevyAlgorithm,
    RSLevyResponseItem
};
