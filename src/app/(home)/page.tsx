import ImageSection from "./components/ImageSection";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
export default function Home() {
  return (
    <div>
      <main>
        <ImageSection />
        <CategoriesSection />
        <ProductsSection />
      </main>
    </div>
  );
}
