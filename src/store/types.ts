type optionType = {
  size: string;
  amount: number;
};

export type ProductType = {
  id: string | number;
  name: string;
  options: optionType;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PriceType = {
  id: string | number;
  description: string;
  active: boolean;
  createdAt: Date;
  removedAt: Date;
};

export type PageType = {
  id: string | number;
  title: string;
  active: boolean;
  updatedAt: Date;
  publishedAt: Date;
};
