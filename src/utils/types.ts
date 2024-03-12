export interface Product {
  image?: string;
  name: string;
  brand: string;
  type: string;
  unit: string;
  category: string;
  subCategory: string;
  sku: string;
  currentStock: string;
  location?: string;
  purchasedPrice: number;
  profitPercent: number;
  defaultSellingPrice: number;
  taxIncluded?: TaxInfo;
}

export interface TaxInfo {
  type: "inclusive" | "exclusive";
}
