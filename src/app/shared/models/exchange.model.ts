import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

class Exchange {
    constructor(public id: number, public name: string) {}
}

@Injectable({ providedIn: "root" })
class ExchangeAdapter implements Adapter<Exchange> {
    adapt(item: any): Exchange {
        return new Exchange(item.id, item.name);
    }
}

export { Exchange, ExchangeAdapter };
