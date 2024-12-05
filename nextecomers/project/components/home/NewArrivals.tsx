import Container from '../ui/Container';
import ProductGrid from '../products/ProductGrid';
import { products } from '@/lib/data/products';

const NewArrivals = () => {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
};

export default NewArrivals;