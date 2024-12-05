import Container from '../ui/Container';
import CategoryCard from './CategoryCard';
import { categories } from '@/lib/data/categories';

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;