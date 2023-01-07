interface AddOn {
  name: string;
  is_default?: boolean;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  price: number; // price
  quantity_available: number;
  image: string;
  vat: number; // 5% vat
  addons: AddOn[];
}
