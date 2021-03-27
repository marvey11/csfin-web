import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Exchange, ExchangeAdapter } from "src/app/shared/models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
class ExchangeService {
    constructor(private http: HttpClient, private adapter: ExchangeAdapter) {}

    list(): Observable<Exchange[]> {
        const url = `${environment.apiURL}/exchanges`;
        return this.http.get<Exchange[]>(url).pipe(map((data: any[]) => data.map(this.adapter.adapt)));
    }

    create(exchange: Exchange): Observable<unknown> {
        const data = { name: exchange.name };
        const url = `${environment.apiURL}/exchanges`;
        return this.http.post<unknown>(url, data);
    }
}

export { ExchangeService };
