type Preview = {
  title: string;
  url: string;
};
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  old_price: number | null;
  href: string;
  preview: Preview;
};