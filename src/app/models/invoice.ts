import { Client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice {
    id!: number;
    name!: String;
    client!: Client;
    company!: Company;
    items!: Item[];
}