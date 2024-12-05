import Container from '@/components/ui/Container';
import ProductGrid from '@/components/products/ProductGrid';
import { products } from '@/lib/data/products';

export default function ShopPage() {
  return (
    <Container className="py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
      <ProductGrid products={products} />
    </Container>
  );
}