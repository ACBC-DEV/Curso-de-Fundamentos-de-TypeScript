export type Sizes = 'S' | 'L' | 'M' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
