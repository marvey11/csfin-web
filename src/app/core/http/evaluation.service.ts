import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
    PerformanceEvaluationItem,
    PerformanceEvaluationItemAdapter,
    PerformanceInterval,
    RSLevyAdapter,
    RSLevyResponseItem
} from "src/app/shared/models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class EvaluationService {
    constructor(
        private http: HttpClient,
        private adapter: PerformanceEvaluationItemAdapter,
        private adapterRSLevy: RSLevyAdapter
    ) {}

    getPerformanceData(interval: PerformanceInterval): Observable<PerformanceEvaluationItem[]> {
        const url = `${environment.apiURL}/evaluate/performance-data`;
        const p = new HttpParams().set("interval", JSON.stringify({ unit: interval.unit, count: interval.count }));
        return this.http
            .get<PerformanceEvaluationItem[]>(url, { params: p })
            .pipe(map((data: any[]) => data.map(this.adapter.adapt)));
    }

    getRSLevyData(): Observable<RSLevyResponseItem[]> {
        const url = `${environment.apiURL}/evaluate/rsl-data`;
        return this.http.get<RSLevyResponseItem[]>(url).pipe(map((data: any[]) => data.map(this.adapterRSLevy.adapt)));
    }
}
