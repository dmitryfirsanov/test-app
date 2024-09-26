export interface Address {
  city: string,
  street: string
}

export interface Product {
  id: number,
  name: string,
  address: Address,
  seller: string,
  type: string,
  description: string,
  price: number,
  count: number,
  dealType: string,
  favorites: boolean,
  inDeals: boolean,
  isPayed: boolean
}