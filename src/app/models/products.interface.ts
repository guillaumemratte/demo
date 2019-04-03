export enum imageTypes {
  PREVIEW = 'preview',
  PRODUCT = 'product'
}

export interface Product {
  assortmentGroup: string;
  brand: string;
  bulkyProduct: boolean;
  code: string;
  contentUnit: string;
  description: string;
  images: ProductImage[];
  name: string;
  numberContentUnits: string;
  posProduct: any;
  price: {
    basePrice: {
      basePrice: number;
      basePriceBaseFactor: number;
      basePriceUnit: string;
    },
    currencyIso: string;
    formattedValue: string;
    priceType: string;
    value: number;
  };
  stock: any;
  url: string;
}

export interface ProductImage {
  format: string;
  imageType: imageTypes;
  url: string;
}
