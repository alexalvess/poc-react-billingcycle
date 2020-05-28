import { CreditModel } from "./creditModel";
import { DebtModel } from "./debtMode";

export class BillingCycleModel {
    id: string;
    name: string;
    month: number;
    year: number;
    credits: Array<CreditModel>;
    debts: Array<DebtModel>;

    constructor(
        id: string,
        name: string,
        month: number,
        year: number,
        credits: Array<CreditModel>,
        debts: Array<DebtModel>
    ) {
        this.id = id;
        this.name = name;
        this.month = month;
        this.year = year;
        this.credits = credits;
        this.debts = debts;
    }
}
