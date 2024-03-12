import Dexie, { Table } from "dexie";
import { Product } from "./types";

export class InventoryDatabase extends Dexie {
  products!: Table<Product>;

  constructor() {
    super("inventory");
    this.version(1).stores({
      products: "++id", // Primary key and indexed props
    });
  }
}

export const db = new InventoryDatabase();
