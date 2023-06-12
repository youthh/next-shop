export interface IProductCard {
  id: number;
  nameProduct: string;
}

export interface IProductCardShop extends IProductCard {
  price: number;
  isFavorite: boolean;
  categoryName: string;
}
