export class DebtModel {
    name: string;
    value: number;
    status: Status;

    constructor(name: string, value: number, status: Status) {
        this.name = name;
        this.value = value;
        this.status = status;
    }
}

enum Status {
    PAYED,
    PENDING,
    SCHEDULED
}