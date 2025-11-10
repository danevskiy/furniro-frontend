import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
import ProductCard from "@/app/components/Product/ProductCard";
import { type Product } from "@/app/types/Product";

export default function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      old_price: 3500000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product1.png",
      },
    },
    {
      id: 2,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: 1700000,
      old_price: null,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product2.png",
      },
    },
    {
      id: 3,
      title: "Lolito",
      description: "Luxury big sofa",
      price: 2103000,
      old_price: 3504000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product3.jpg",
      },
    },
    {
      id: 4,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      old_price: 3500000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product1.png",
      },
    },
    {
      id: 5,
      title: "Lolito",
      description: "Luxury big sofa",
      price: 2103000,
      old_price: 3504000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product3.jpg",
      },
    },
    {
      id: 6,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      old_price: 3500000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product1.png",
      },
    },
    {
      id: 7,
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: 1700000,
      old_price: null,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product2.png",
      },
    },
    {
      id: 8,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      old_price: 3500000,
      href: "#",
      preview: {
        title: "Dining",
        url: "/product1.png",
      },
    },
  ];
  return (
    <section>
      <Container className="mt-14.5 mb-14">
        <div className="text-center text-neutral-700 text-4xl font-bold leading-12 mb-8">
          Our Products
        </div>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} info={product} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/products"
            className="transition duration-200  text-yellow-600 hover:text-white hover:bg-yellow-600 text-base font-semibold leading-6 border border-yellow-600 py-3 px-5 inline-block mt-8 w-61 max-w-full"
          >
            Show More
          </Link>
        </div>
      </Container>
    </section>
  );
}
