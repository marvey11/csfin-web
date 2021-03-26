import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Security } from "src/app/shared/models";
import { SecurityAdapter } from "src/app/shared/models/security.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
class SecurityService {
    constructor(private http: HttpClient, private adapter: SecurityAdapter) {}

    list(): Observable<Security[]> {
        const url = `${environment.apiURL}/securities`;
        return this.http.get<Security[]>(url).pipe(map((data: any[]) => data.map(this.adapter.adapt)));
    }
}

export { SecurityService };
