import ImageSection from "./components/ImageSection";
import CategoriesSection from "./components/CategoriesSection";
import ProductsSection from "./components/ProductsSection";
import CollageSection from "./components/CollageSection";
export default function HomePage() {
  return (
    <div>
      <main>
        <ImageSection />
        <CategoriesSection />
        <ProductsSection />
        <CollageSection />
      </main>
    </div>
  );
}
